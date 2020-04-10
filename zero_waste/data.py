import requests
from bs4 import BeautifulSoup

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
        soup = BeautifulSoup(result.text, 'html.parser')
        links = soup.select(
            '.products-footer > .shopify-pagination > ul > li > a')
        if len(links) is 0:
            pages.append(1)
        else:
            for link in links[:-1]:
                pages.append(int(link.text))

        if len(pages) < 2:
            last_pages.append(pages[0])
        else:
            last_pages.append(pages[-1])  # 각 카테고리별 마지막 페이지 추출

        for i in range(len(last_pages)):
            subpage = last_pages[i]  # 각각의 페이지들을 범위로 새로 만들기 위해
            for j in range(subpage):
                url = f"https://zerowastestore.com/{keyword}?page={j}"
            print(url)

    # result = requests.get(url)
    # soup = BeautifulSoup(result.text, 'html.parser')
    # products = soup.select_one(
    # '.main-page-wrapper > .container > .row > .site-content > .jas_contain')
    # product = products.select('.product-grid-item')
    # for one in product:
    #     title = one.select_one('.product-title').text
    #     price = one.select_one('.price').text
    # print(title, price)
if __name__ == "__main__":
    get_keywords()
