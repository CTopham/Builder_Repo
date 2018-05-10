# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
@app.route("/")
def cinco():
    hurri_dic = {"hur1" : "Irma",
                 "hur2": "Gnarley"}
    return render_template ("index.html", pickles = hurri_dic)


if __name__ == "__main__":
    app.run(debug=True)
