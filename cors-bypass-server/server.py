import requests
from flask import Flask, jsonify, request, json

app = Flask(__name__)


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorizatio,Access-Control-Allow-Origin')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


@app.route('/', methods=['POST'])
def hello_world():
    data = request.get_json(force=True) or request.form or json.loads(request.data)
    url = data['url']
    post_data = data['data']

    r = requests.post(url, post_data)
    return jsonify(r.text)

if __name__ == '__main__':
    app.run()
