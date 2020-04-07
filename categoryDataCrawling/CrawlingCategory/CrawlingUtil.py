# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import urllib.request
import os

class CrawUtil:

    def get_link(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        for list in soup.find("div", class_="NHN_Writeform_main").find_all("div"):
            div = list.find("div", class_="ranking_headline")
            link.append(div.find("a")["href"])

        return link

    def food_get_link(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        link = []
        '''http://recipekorea.com/
        for list in soup.find("ul", class_="webzine").find_all("li"):
            div = list.find("div", class_="webzineImg")
            link.append(div.find("a")["href"])
        '''

        for list in soup.select('td.mw_basic_list_subject'):

            list = list.find('a')['href']
            link.append(list)

        return link

    def get_text(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''

        for item in soup.find_all('div', id='articleBodyContents'):
            text = text + str(item.find_all(text=True))

        return text

    def food_get_text(self, URL):
        source_code_from_URL = urllib.request.urlopen(URL)
        soup = BeautifulSoup(source_code_from_URL, 'html.parser', from_encoding='utf-8')
        text = ''
        '''https://www.82cook.com/entiz/
        for item in soup.find_all('div', id='articleBody'):
            text = text + str(item.find_all(text=True))
        '''
        '''http://recipekorea.com/'''
        for item in soup.select('div.contents_shop_view'):
            text = text + str(item.find_all(text=True))
        return text

    def isInDirectory(self, path):
        fileNum = 0
        try:
            if not (os.path.isdir(path)):
                os.makedirs(os.path.join(path))

            fileNum = len(os.walk(path).__next__()[2])
        except OSError as e:
            print("Failed to create directory!!!!!")

        return fileNum