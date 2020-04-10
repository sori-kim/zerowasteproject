from pymongo import MongoClient
client = MongoClient("localhost", 27017)
db = client.dbsparta

def question1(): # "어벤져스 : 엔드게임"
    movie = db.movies.find_one({"title": "어벤져스: 엔드게임"})
    print(movie)

def question2():
    avengers = db.movies.find_one({"title": "어벤져스: 엔드게임"})
    avengers_star = avengers['star']

    movies = list(db.movies.find({"star": avengers_star}))
    # for movie in movies:
    #     print(movie["title"])
def question2():
    # 어벤져스: 엔드게임과 평점이 같은 영화 조회 후 수정
    avengers = db.movies.find_one({"title":"어벤져스: 엔드게임"})
    avengers_star = avengers["star"]
    movies = list(db.movies.find({"star": "avengers_star"}))
    db.movies.update_many({"star": avengers_star}, {"$set": {"star":0}}
    )



if __name__ == "__main__":
    question2()