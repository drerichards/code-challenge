import os, requests, json
from flask import Flask, send_from_directory, request, abort, jsonify

if(not os.path.exists("client/node_modules")):
    os.system("cd client && npm install")

if(not os.path.exists("client/build/")):
    os.system("cd client && npm run build")

app=Flask(__name__, static_folder="client/build/static")

def makeRequest(url):
    root = 'https://developers.zomato.com/api/v2.1/'
    url = root + url
    headers = {
        'content-type': 'application/json',
        'user-key': 'a3076a847322edf042adf3563a8b4d46'
    }
    r = requests.get(url, headers=headers)
    return r


@app.route('/api/reviews/')
def reviews():
    return None

@app.route('/', defaults={'path': ''}, methods=['GET'])
@app.route('/<path:path>')
def serve(path):
    if(path == ""):
        return send_from_directory('client/build/', 'index.html')
    else:
        if(os.path.exists("client/build/" + path)):
            return send_from_directory('client/build/', path)
    return send_from_directory('client/build/', 'index.html')


@app.route('/api/search/', methods = ['POST'])
def search():
    if request.json:
        zamatoURL = request.json.get('searchURL', None)
    if not request.json or zamatoURL is None:
        abort(400)
    r = makeRequest(zamatoURL)

    return jsonify(r.text)

@app.route('/api/categories/', methods=['GET'])
def categories():
    if request.method == "GET":
        r = makeRequest('categories')

        return jsonify(r.text)


if __name__=="__main__":
    app.run(debug=True)
