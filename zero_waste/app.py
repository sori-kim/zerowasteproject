from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.dbproject


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/shop')
def shop():
    return render_template('shop.html')


@app.route('/shop/cleaning')
def cleaning():
    return render_template('cleaning.html')


@app.route('/api/new')
def newArrival():
    items = list(
        db.zerowastestore.find(
            {'category': 'arrival'}, {'_id': 0}))
    return jsonify(items)


@app.route('/api/all')
def all_items():
    items = list(
        db.zerowastestore.find()
    ).skip(offset).limit(limit)
    return jsonify(items)


@app.route('/api/cleaning')
def item_cleaning():
    page = int(request.args.get('page', 1))
    limit = 12
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category': 'Cleaning'}, {'_id': 0})
    ).skip(offset).limit(limit)

    return jsonify(items)


@app.route('/api/haircare')
def item_haircare():
    page = int(request.args.get('page', 1))
    limit = 12
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category': 'Hair Care'}, {'_id': 0})
    ).skip(offset).limit(limit)

    return jsonify(items)


@app.route('/api/home')
def item_home():
    page = int(request.args.get('page', 1))
    limit = 12
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category': 'Home'}, {'_id': 0})
    ).skip(offset).limit(limit)

    return jsonify(items)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
