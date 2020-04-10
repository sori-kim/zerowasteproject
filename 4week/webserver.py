from flask import Flask, render_template
app = Flask(__name__)

@app.route('/') # 기본경로
def home():
   return render_template('index.html')

@app.route('/mypage')  # 기본경로 주소 변경
def mypage():
   return '여기는 마이페이지입니다'

if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)

