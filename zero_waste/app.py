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


@app.route('/shop/haircare')
def haircare():
    return render_template('haircare.html')


@app.route('/shop/kitchen')
def kitchen():
    return render_template('kitchen.html')


@app.route('/shop/kids')
def kids():
    return render_template('kids.html')


@app.route('/shop/makeup')
def makeup():
    return render_template('makeup.html')


@app.route('/shop/oral')
def oral():
    return render_template('oral.html')


@app.route('/shop/personal')
def personal():
    return render_template('personal.html')


@app.route('/shop/skincare')
def skincare():
    return render_template('skincare.html')


@app.route('/shop/travel')
def travel():
    return render_template('travel.html')


@app.route('/shop/home')
def forthehome():
    return render_template('home.html')


@app.route('/shop/others')
def others():
    return render_template('others.html')


@app.route('/api/new', methods=['GET'])
def newArrival():
    items = list(
        db.zerowastestore.find(
            {'category': 'arrival'}, {'_id': 0}))
    return jsonify(items)


@app.route('/api/cleaning', methods=['GET'])
def item_cleaning():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit
    items = list(db.zerowastestore.find(
        {'category': 'Cleaning'}, {'_id': 0})
        .limit(limit).skip(offset))
    return jsonify(items)


@app.route('/api/haircare', methods=['GET'])
def item_haircare():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category': 'Hair Care'}, {'_id': 0}).limit(limit).skip(offset))
    return jsonify(items)


@app.route('/api/home', methods=['GET'])
def item_home():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category': 'Home'}, {'_id': 0}).limit(limit).skip(offset)
    )

    return jsonify(items)


@app.route('/api/makeup', methods=['GET'])
def item_makeup():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category': 'Makeup'}, {'_id': 0}).limit(limit).skip(offset)
    )
    return jsonify(items)


@app.route('/api/kitchen', methods=['GET'])
def item_kitchen():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category': "Kitchen"}, {'_id': 0}).limit(limit).skip(offset)
    )
    return jsonify(items)


@app.route('/api/kids', methods=['GET'])
def item_kids():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category': "Kids & Baby"}, {'_id': 0}).limit(limit).skip(offset)
    )
    return jsonify(items)


@app.route('/api/oral', methods=['GET'])
def item_oral():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category':  "Oral Hygiene"}, {'_id': 0}).limit(limit).skip(offset)
    )
    return jsonify(items)


@app.route('/api/personal', methods=['GET'])
def item_personal():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category':  "Personal Hygiene"}, {'_id': 0}).limit(limit).skip(offset)
    )
    return jsonify(items)


@app.route('/api/travel', methods=['GET'])
def item_travel():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category':  "Travel"}, {'_id': 0}).limit(limit).skip(offset)
    )
    return jsonify(items)


@app.route('/api/skincare', methods=['GET'])
def item_skincare():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category':  "Skin Care"}, {'_id': 0}).limit(limit).skip(offset)
    )
    return jsonify(items)


@app.route('/api/others', methods=['GET'])
def item_others():
    page = int(request.args.get('page', 1))
    limit = 9
    offset = (page - 1) * limit

    items = list(
        db.zerowastestore.find(
            {'category':  "Others"}, {'_id': 0}).limit(limit).skip(offset)
    )
    return jsonify(items)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
