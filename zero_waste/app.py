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


@app.route('/like')
def like():
    return render_template('wishlist.html')


@app.route('/shop/<category>')
def product(category):
    return render_template('product.html', category=category)


@app.route('/api/new', methods=['GET'])
def newArrival():
    items = list(
        db.zerowastestore.find(
            {'category': 'arrival'}, {'_id': 0}))
    return jsonify(items)


@app.route('/api/product', methods=['GET'])
def item_all():
    page = int(request.args.get('page', 1))
    category = request.args.get('category', 'all')

    cateogry_dict = {
        "cleaning": "Cleaning",
        "haircare": "Hair Care",
        "home": "Home",
        "makeup": "Makeup",
        "kitchen": "Kitchen",
        "kids": "Kids & Baby",
        "oral": "Oral Hygiene",
        "personal": "Personal Hygiene",
        "travel": "Travel",
        "skincare": "Skin Care",
        "others": "Others",
    }

    limit = 9
    offset = (page - 1) * limit

    if category == 'all':
        items = list(db.zerowastestore.find(
            {}, {'_id': 0})
            .limit(limit).skip(offset))
    else:
        items = list(db.zerowastestore.find(
            {'category': cateogry_dict[category]}, {'_id': 0})
            .limit(limit).skip(offset))
    return jsonify(items)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
