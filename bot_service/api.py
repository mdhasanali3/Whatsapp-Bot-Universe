from flask import Flask, request, jsonify
from flask_cors import CORS

from medichatbot import mcb
import config
app = Flask(__name__)
conversational_agent = None
CORS(app)


@app.route("/medichatbot",methods=['POST'])
def medibot():
    prompt=request.json.get("prompt","")
    print(prompt)
    medibot= mcb(prompt)
    return jsonify({"medibot": medibot})

if __name__ == "__main__":
    # conversational_agent = langchain_business.initiation()
    # snip_engine= langchain_business.snip_init(engine_path)
    app.run(debug=True, host=config.host, port=config.port)
