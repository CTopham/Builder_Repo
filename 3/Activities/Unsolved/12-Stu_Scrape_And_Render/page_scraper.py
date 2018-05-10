import time
from splinter import Browser
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver


def init_browser():
    executable_path = {'executable_path': '/usr/local/bin/chromedriver'}
    return Browser('chrome', **executable_path, headless=False)


def scrape():
    # create a Browser instance
    browser = init_browser()
    surf_data = {}

    unsplash = "https://unsplash.com/search/photos/surfing"
    browser.visit(unsplash)
    time.sleep(2)
        
    # find button and click it to search
    button = browser.find_by_name("button")
    button.click()
    time.sleep(2)
    html = browser.html

    img_soup = BeautifulSoup(html, "html.parser")
    elem = img_soup.find(id="gridMulti")
    img_src = elem.find("img")["src"]
    time.sleep(2)

    surf_data["src"] = img_src

    weather = "http://www.surfline.com/surf-forecasts/southern-california/santa-barbara_2141"
    browser.visit(weather)

    html = browser.html

    forecast_soup = BeautifulSoup(html, "html.parser")
    report = forecast_soup.find(class_="forecast-outlook")
    surf_report = report.find_all("p")

    surf_data["report"] = build_report(surf_report)
    return surf_data

    def build_report(surf_report):
        final_report = ""
        for p in surf_report:
            final_report += " " + p.get_text()
            print(final_report)
            return final_report

    # @TODO
    # 1. create an empty dictionary
    # 2. visit a url
    # 3. scrape it with BeautifulSoup
    # 4. find three specific elements and add them to your dictionary
    # 5. return your dictionary
