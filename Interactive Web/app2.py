import os
import json
import datetime as dt
import sqlalchemy
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
import pandas as pd
import pprint
import json
import numpy as np
from flask import (
    Flask,
    render_template,
    jsonify,
    request
    )

from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Database Setup
#################################################
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///DataSets/belly_button_biodiversity.sqlite"

db = SQLAlchemy(app)


class samples_metadata(db.Model):
    __tablename__ = 'samples_metadata'

    SAMPLEID = db.Column(db.Integer, primary_key=True)
    AGE = db.Column(db.Integer)
    BBTYPE = db.Column(db.String(64))
    EVENT = db.Column(db.String(64))
    ETHNICITY = db.Column(db.String(64))
    GENDER = db.Column(db.String(64))
    LOCATION = db.Column(db.String(64))
    

@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")


@app.route("/test/<sample>")
def list_test(sample = 'BB_940'):
    results = db.session.query(samples_metadata.SAMPLEID, samples_metadata.EVENT ).\
    filter(samples_metadata.SAMPLEID == sample).all()

    return jsonify(results)



if __name__ == "__main__":
    app.run(debug=True)