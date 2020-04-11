import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
from flask import Flask, render_template
app = Flask(__name__)


client = MongoClient('localhost', 27017)
db = client.dbproject


@app.route('/')
def home():
    return render_template('index.html')


def get_url():  # 키워드 함수
    url = "https://zerowastestore.com/collections/all"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    result = requests.get(url, headers=headers)
    soup = BeautifulSoup(result.text, 'html.parser')

    sidebar = soup.find("ul", {'class': 'product-categories'})
    atags = sidebar.find_all('a')

    key_url = []  # 카테고리 a태그의 href 태그
    keys = []  # 카테고리명
    pages = []

    for atag in atags:
        key_url.append(atag.get('href'))
        keys.append(atag.text)  # request할때 필요한 url 뒷부분과 카테고리 리스트
    for i in range(len(key_url)):  # 14개의 카테고리가 있어서 총 14번 돌아감
        keyword = key_url[i]
        result = requests.get(f"https://zerowastestore.com{keyword}")

        # 각 카테고리별 총 페이지수 추출하기
        soup = BeautifulSoup(result.text, 'html.parser')
        links = soup.select(
            '.products-footer > .shopify-pagination > ul > li > a')
        if len(links) is 0:
            pages.append(1)
        else:
            pages.append(int(links[-2].text))

        # print('카테고리: ', keys[i], '****************************')

        # 각 카테고리별 페이지 수 만큼 반복되는 반복문 만들기
        for j in range(1, pages[i]+1):
            res = requests.get(
                f"https://zerowastestore.com/{keyword}?page={j}")
            data = BeautifulSoup(res.text, 'html.parser')
            products = data.find('div', {'class': 'jas_contain'})
            product = products.find_all(
                'div', {'class': 'product-grid-item'})
            for one in product:
                title = one.select_one('.product-title').text
                price = one.select_one('.price').text
                img_h = one.select_one(
                    '.product-element-top > a').get('href')
                img_url = f"https://zerowastestore.com{img_h}"
                img_s = one.select_one(
                    '.product-element-top > a > img').get('src')
                img_src = f"https:{img_s}"

            # print(j, '쪽')
                doc = {
                    'category': keys[i],
                    'title': title,
                    'price': price,
                    'img_url': img_url,
                    'img_src': img_src
                }
                # db.zerowastestore.insert_one(doc)


if __name__ == "__main__":
    app.run('0.0.0.0', port=5000, debug=True)
