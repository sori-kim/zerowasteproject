import requests
# requests.get()
# requests.post(url, data={"id": "username"})

r = requests.get('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99')
rjson = r.json()

gus = rjson['RealtimeCityAir']['row']
for gu in gus:
    gu_name = gu["MSRSTE_NM"]
    mise_value = gu['IDEX_MVL']
    if mise_value > 80:
        print(gu_name)
    # print(gu_name + ':' + str(mise_value))
