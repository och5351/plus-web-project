# -*- coding: utf-8 -*-
from CrawlingCategory.CrawlingUtil import CrawUtil
from selenium import webdriver
from bs4 import BeautifulSoup as bs
from urllib.request import Request, urlopen
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
import pyperclip
import time


class GameCategory:

    crawlingUtil = CrawUtil()

    chromePath = '' # 크롬드라이버 경로 ex) 'C://Program Files (x86)/Google/Chrome/Application/chromedriver.exe'
    driver = webdriver.Chrome(chromePath)
    ID = ''
    PASS = ''

    def __init__(self, count, rootPath): #naver -> unityHUB
        self.seleniumSetting()
        path = rootPath + '/GameCategory' # 폴더 생성 시의 경로
        fileNum = self.crawlingUtil.isInDirectory(path) # 폴더 생성 & 파일 count 함수
        p = 0
        increaseCount = 0
        for i in range(count):
            html = urlopen(
                'https://cafe.naver.com/ArticleList.nhn?search.clubid=26377973&search.menuid=58&search.boardtype=L&search.totalCount=151&search.page='+str(i+1)).read()
            soup = bs(html, 'html.parser', from_encoding='MS949')
            information_list = soup.find('div', class_='article-board m-tcol-c').find_all('a', class_='m-tcol-c')
            for link in information_list:
                if link['href'] != '#':
                    increaseCount += 1
                    p = self.detailFinder(link['href'], increaseCount, fileNum, p)

    def detailFinder(self, detailURL, count, fileNum, p):
        self.driver.get(
            'https://cafe.naver.com'+detailURL)
        time.sleep(1)
        self.driver.switch_to.default_content  # (1) 상위 프레임으로 전환
        self.driver.switch_to.frame('cafe_main')  # 네이버까페의 경우  (New 명령어)
        time.sleep(1)
        try:
            upName = self.driver.find_element_by_class_name('NHN_Writeform_Main')
            pText = upName.find_elements_by_tag_name('table')
            OUTPUT_FILE_NAME = 'GameCategory/GameCategory%05d.txt' % (count + fileNum - p)
            print(OUTPUT_FILE_NAME)
            open_output_file = open(OUTPUT_FILE_NAME, 'w', -1, "utf-8")
            open_output_file.write(pText[3].text)
            open_output_file.close()

        except:
            p += 1

        time.sleep(1)

        return p


    def copy_input(self,xpath, input):
        pyperclip.copy(input)
        self.driver.find_element_by_xpath(xpath).click()
        # 클립보드 내용 붙여넣기
        ActionChains(self.driver).key_down(Keys.CONTROL).send_keys('v').key_up(Keys.CONTROL).perform()
        time.sleep(1)

    def seleniumSetting(self):

        self.driver.implicitly_wait(3)
        self.driver.get('https://www.naver.com/')
        loginButton = self.driver.find_element_by_xpath('//*[@id="account"]/div/a/i')
        loginButton.click()
        time.sleep(3)
        self.copy_input('//*[@id="id"]', self.ID)
        time.sleep(1)
        self.copy_input('//*[@id="pw"]', self.PASS)
        time.sleep(1)
        self.driver.find_element_by_xpath('//*[@id="frmNIDLogin"]/fieldset/input').click()
        time.sleep(1)


