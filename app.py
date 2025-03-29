from flask import Flask, render_template, send_file

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/download')
def download():
    return send_file("static/code editor by farhan.exe", as_attachment=True)


if __name__ =="__main__":
    app.run(debug=True)