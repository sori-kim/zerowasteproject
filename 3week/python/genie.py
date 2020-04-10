import requests
from bs4 import BeautifulSoup


def genie_music():
    url = 'https://zerowastestore.com/collections/cleaning?page=1'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}

    res = requests.get(url, headers=headers)

    soup = BeautifulSoup(res.text, 'html.parser')

    products = soup.select_one(
        '.container > .row > div > .jas_contain')
    product = products.select('.product-grid-item')
    for one in product:
        title_tag = one.select_one('.product-title')
        title = title_tag.text
        print(title)

    # title_tag = one.select_one('.product-title')


if __name__ == "__main__":  # 파이썬에서 많이 사용되는 문구. "해당 파일이 실행될때" 다음의 함수를 실행시킨다.
    genie_music()
