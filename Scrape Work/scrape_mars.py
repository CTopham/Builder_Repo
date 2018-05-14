# Importing dependencies
import time
from splinter import Browser
from bs4 import BeautifulSoup
from selenium import webdriver
import pandas as pd
import numpy as np

# Executing Chrome Driver for auto navigation to click links


def init_browser():
    executable_path = {
        'executable_path': r'C:\Users\Craig\Desktop\chromedriver.exe'}
    return Browser("chrome", **executable_path, headless=False)


def scrape():

# Looping through Nasa website and grabbing the latest title and news
    browser = init_browser()
    listing = {}

# Setting url to website
    url = "https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest"
    browser.visit(url)
    time.sleep(2)

# grabbing html
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

# Grabbing title and paragraph text
    listing["News_Title"] = soup.find(class_="content_title").get_text()
    listing["Newsp"] = soup.find(class_="article_teaser_body").get_text()
    
# Grabbing feature picture   
    time.sleep(5)
    
    featured_image_url = []
    url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    browser.visit(url)
    time.sleep(2)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

    xpath = '//*[contains(@class, "button fancybox")]'
    results = browser.find_by_xpath(xpath)
    img = results[0]
    img.click()
    time.sleep(2)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")
    elem = soup.find(id="fancybox-lock")
    img_src = elem.find("img")["src"]

    featured_image_url = 'https://www.jpl.nasa.gov' + img_src
    listing['featured_image_url'] = featured_image_url

# Grabbing Tweet
    time.sleep(8)
    url = "https://twitter.com/marswxreport?lang=en"
    browser.visit(url)
    time.sleep(7)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")
    xpath = '//*[contains(@class, "js-tweet-text-container")]'
    results = browser.find_by_xpath(xpath)
    img = results[0]
    img.click()
    time.sleep(5)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")
    last_tweet = soup.find(class_="TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text").get_text()
    listing['New_Tweet']=last_tweet
    
    return listing
