from flask import Flask, render_template, jsonify, request
import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.dbsparta



@app.route('/')
def home():
    return render_template('index.html')


@app.route('/memo', methods=['POST']) # 메모읽기
def memo_post():
    url_received = request.form.get('url', None) 
    #get은 파이썬에서 딕셔너리 전용으로 쓰는 내장함수인데, 제이썬파일로 클라가 데이터를 줬을때 가끔 약속된 키가 아닌값을 줄때가 있다.
    # 키가 없으면 디폴트값을 띄우라는것. 에러를 방지하는용도이다.
    comment_received = request.form.get('comment', '')

  #크롤링 준비
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(url_received, headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')
  #크롤링 
    og_title = soup.select_one('meta[property="og:title"]')
    og_description = soup.select_one('meta[property="og:description"]')
    og_image = soup.select_one('meta[property="og:image"]')

    title = og_title['content']
    description = og_description['content']
    image = og_image['content']

    db.memo.insert_one({
        "title" : title,
        "description": description,
        "image": image,
        "url": url_received,
        "comment": comment_received
    })
    return jsonify({"success": True})


@app.route('/memo', methods=['GET']) # 메모저장하기 
def memo_get():
    memos = list(db.memo.find({}, {"_id" : 0}))
    return jsonify(memos)    


if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)
