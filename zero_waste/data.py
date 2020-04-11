import requests
from bs4 import BeautifulSoup


def get_url():  # 키워드 함수
    url = "https://zerowastestore.com/collections/all"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    result = requests.get(url, headers=headers)
    soup = BeautifulSoup(result.text, 'html.parser')

    sidebar = soup.find("ul", {'class': 'product-categories'})
    atags = sidebar.find_all('a')
    key_url = []
    keys = []
    pages = []
    last_pages = []

    for atag in atags:
        key_url.append(atag.get('href')) # request할때 필요한 url 뒷부분
        keys.append(atag.text)   
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
            last_pages.append(pages[-1])  # 각 카테고리별 마지막 페이지번호 추출

        for k in range(len(last_pages)):
            if i != k:
                continue  # 위에 돌아가는 반복문 멈추게 하기 위해
            else:
                subpage = last_pages[k]+1  # 각각의 페이지들을 범위로 새로 만들기 위해
                for j in range(1, subpage):
                    final_url = f"https://zerowastestore.com/{keyword}?page={j}"

                    res = requests.get(final_url)
                    data = BeautifulSoup(res.text, 'html.parser')
                    products = data.find('div', {'class': 'jas_contain'})
                    product = data.find_all(
                        'div', {'class': 'product-grid-item'})
                    for one in product:
                        title = one.select_one('.product-title').text
                        price = one.select_one('.price').text
                        print(title, price)

    # print(title, price)


if __name__ == "__main__":
    get_url()
