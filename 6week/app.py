from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient, DESCENDING

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.dbsparta


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/list', methods=["GET"])
def movie_star_list():
    mystar = list(db.mystar.find({}, {'_id': 0}).sort([('like', DESCENDING)])
                  )
    return jsonify(mystar)


@app.route('/api/like', methods=['POST'])
def movie_star_like():
    name_receive = request.form['name_give']
    # print(name_receive)
    moviestar = db.mystar.find_one({'name': name_receive})
    # 기존 영화배우 정보를 먼저 가져오기
    moviestarlike = moviestar['like']  # 기존 좋아요수
    db.mystar.update_one(
        {'name': name_receive},
        {'$set': {'like': moviestarlike + 1}}
    )
    # 클라가 보내준 이름값을 받아서 좋아요 수를 +1해서 업데이트함
    return jsonify({'success': True})  # 지난주에도 이거 안넣어서 결과가 안나옴!


@app.route('/api/delete', methods=['POST'])
def movie_delete_star():
    name_receive = request.form['name_give']
    db.mystar.delete_one({'name': name_receive})  # 클라가 보내준 이름값의 데이터를 하나 지운다
    return jsonify({'success': True})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
