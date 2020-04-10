import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbsparta

URL을 읽어서 HTML를 받아오고,

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
url = 'https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200331'
data = requests.get(url, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')
movie_info = soup.select('table.list_ranking > tbody > tr')
rank = 0
for movie in movie_info:
    title_tag = movie.select('a')
    score_tag = movie.select('td.point')

    if len(title_tag) > 0 and len(score_tag) > 0:
        rank += 1
        title = title_tag[0].text
        score = score_tag[0].text

        doc = {
            'rank': rank,
            'title': title,
            'score': score
        }

avengers = db.movies.find_one({'title': '어벤져스: 엔드게임'}, {'_id': False})
print(avengers)
aven_score = avengers['score']
print(aven_score)
same_score = list(db.movies.find({'score': '9.38'}, {'_id': False}))
print(same_score)
db.movies.update_many({'score': '9.38'}, {'$set': {'score': '0'}})
