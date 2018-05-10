# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a list of dictionaries and renders an index.html template
@app.route("/")
def page1():
    hurris = [{"Harvey": "Category 5"},{"Irma": "Category 4"}]
    return render_template ("index.html", pickles=hurris)

if __name__ == "__main__":
    app.run(debug=True)


