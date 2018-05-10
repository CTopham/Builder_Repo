from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
import page_scraper
from bs4 import BeautifulSoup

app = Flask(__name__)

mongo = PyMongo(app)


@app.route('/')
def index():
    surfing = mongo.db.surfing.find_one()
    return render_template("index.html", surfing = surfing)


@app.route('/scrape')
def scrape():
    surfing = mongo.db.surfing
    data = page_scraper.scrape
    surfing.update(
        {},
        data,
        upsert = True
    )
    return redirect("http://localhost:5000/", code=302)

    


if __name__ == "__main__":
    app.run(debug=True)
