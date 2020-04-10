import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbsparta


url = "https://zerowastestore.com"


def get_keywords():  # 키워드 함수
    url = "https://zerowastestore.com/collections/all"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    result = requests.get(url, headers=headers)
    soup = BeautifulSoup(result.text, 'html.parser')

    sidebar = soup.find("ul", attrs={'class': 'product-categories'})
    atags = sidebar.find_all('a')
    key_url = []
    keys = []
    pages = []
    last_pages = []

    for atag in atags:
        key_url.append(atag.get('href'))
        keys.append(atag.text)  # request할때 필요한 url 뒷부분과 카테고리 리스트
    for i in range(len(key_url)):
        keyword = key_url[i]
        result = requests.get(f"https://zerowastestore.com{keyword}")
        doc = {
            'number': number,
            'keyword': keyword,
            'key_url': key_url
        }
        db.project.insert_one(doc)
