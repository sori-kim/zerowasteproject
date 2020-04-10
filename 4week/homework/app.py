from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.dbsparta


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/order',methods=["GET"]) #주문을 가져오는 api
def order_get():
    orders = list(db.orders.find({}, {"_id": 0})) #id는 제이선으로 변환을 못하니까 가져오면 안된다.
    return jsonify({
        "orders": orders
    })

@app.route('/order', methods=["POST"]) #주문을 생성하는 api
def order_post():
    name = request.form.get("name", '')
    #form은 json값이다. 네임이라는 키를 읽어오는데 키가 없으면 디폴트로 빈값을 가져와라
    amount = request.form.get("amount", 0)
    address = request.form.get("address", '')
    phone = request.form.get("phone", '')

    print(request.form)

    db.orders.insert_one({
        "name": name,
        "amount": amount,
        "address": address,
        "phone": phone
    })


    return jsonify({"success": "OK"})



if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)
