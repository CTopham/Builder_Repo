import os
import datetime as dt
import sqlalchemy
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
# Database Setup
#################################################
engine = create_engine("sqlite:///belly_button_biodiversity.sqlite")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the invoices and invoice_items tables
#otulist = Base.classes.samples
metameta = Base.classes.samples_metadata

# Create our session (link) from Python to the DB
session = Session(engine)

app = Flask(__name__)


# #-------------------otu name table------------------------------------------
# class OTU(db.Model):
#    __tablename__ = 'otu'
#    otu_id = db.Column(db.Integer, primary_key=True)
#    lowest_taxonomic_unit_found = db.Column(db.String)

#    def __repr__(self):
#        return f"id={self.id}, name={self.name}"

# fetch('http://127.0.0.1:5000/names').then(data=>data.json()).then(rows => console.log(rows))

#--------------------------------------------------------------
@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")

#--------------------------------------------------------------
@app.route('/otu')
def otu():
    result = {}

    results = db.session.query(OTU.lowest_taxonomic_unit_found).all()
    for k,i in enumerate(results):
        # print(i)
        row = []
        innerRow ={}
        # print(i._asdict())
        for key in i._asdict():
            
            if(';' in i._asdict().get(key)):

                innerRes = i._asdict().get(key).split(';')
            else:
                innerRes = [i._asdict().get(key)]
            
            innerRow[key]=innerRes
            row.append(innerRow)
            result[str(k)] = row


    print(result)
    return jsonify(result)

#--------------------------------------------------------------

@app.route("/names")
def names():
    data = [
        "BB_940","BB_941","BB_943","BB_944","BB_945","BB_946","BB_947","BB_948","BB_949","BB_950","BB_952","BB_953","BB_954","BB_955","BB_956","BB_958","BB_959","BB_960","BB_961","BB_962","BB_963","BB_964","BB_966","BB_967","BB_968","BB_969","BB_970","BB_971","BB_972","BB_973","BB_974","BB_975","BB_978","BB_1233","BB_1234","BB_1235","BB_1236","BB_1237","BB_1238","BB_1242","BB_1243","BB_1246","BB_1253","BB_1254","BB_1258","BB_1259","BB_1260","BB_1264","BB_1265","BB_1273","BB_1275","BB_1276","BB_1277","BB_1278","BB_1279","BB_1280","BB_1281","BB_1282","BB_1283","BB_1284","BB_1285","BB_1286","BB_1287","BB_1288","BB_1289","BB_1290","BB_1291","BB_1292","BB_1293","BB_1294","BB_1295","BB_1296","BB_1297","BB_1298","BB_1308","BB_1309","BB_1310","BB_1374","BB_1415","BB_1439","BB_1441","BB_1443","BB_1486","BB_1487","BB_1489","BB_1490","BB_1491","BB_1494","BB_1495","BB_1497","BB_1499","BB_1500","BB_1501","BB_1502","BB_1503","BB_1504","BB_1505","BB_1506","BB_1507","BB_1508","BB_1510","BB_1511","BB_1512","BB_1513","BB_1514","BB_1515","BB_1516","BB_1517","BB_1518","BB_1519","BB_1521","BB_1524","BB_1526","BB_1527","BB_1530","BB_1531","BB_1532","BB_1533","BB_1534","BB_1535","BB_1536","BB_1537","BB_1539","BB_1540","BB_1541","BB_1542","BB_1543","BB_1544","BB_1545","BB_1546","BB_1547","BB_1548","BB_1549","BB_1550","BB_1551","BB_1552","BB_1553","BB_1554","BB_1555","BB_1556","BB_1557","BB_1558","BB_1561","BB_1562","BB_1563","BB_1564","BB_1572","BB_1573","BB_1574","BB_1576","BB_1577","BB_1581","BB_1601"
        ]
    #all_data = list(np.ravel(data))
    return jsonify(data)
#--------------------------------------------------------------

@app.route("/wfreq")
def wash():
    results = session.query(metameta.WFREQ)
    washlist = list(np.ravel(results))
    return jsonify(washlist)


@app.route('/wfreq/<sample>')
def washersample(sample='BB_940'):
    results = session.query(metameta.WFREQ)
        #filter(metameta.SAMPLEID == sample).\
        #group_by(metameta.SAMPLEID).all().\
        #washlist = list(np.ravel(results))

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)