#test
from selenium import webdriver
import time
from bs4 import BeautifulSoup as bs
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from urllib.request import Request, urlopen
import pyperclip


def copy_input(xpath, input):
    pyperclip.copy(input)
    driver.find_element_by_xpath(xpath).click()
    #클립보드 내용 붙여넣기
    ActionChains(driver).key_down(Keys.CONTROL).send_keys('v').key_up(Keys.CONTROL).perform()
    time.sleep(1)

chromePath = 'C://Program Files (x86)/Google/Chrome/Application/chromedriver.exe'
driver = webdriver.Chrome(chromePath)
driver.implicitly_wait(3)
url = 'https://cafe.naver.com/ArticleRead.nhn?clubid=26377973&page=1&menuid=58&boardtype=L&articleid=103381&referrerAllArticles=false'
driver.get('https://www.naver.com/')
loginButton = driver.find_element_by_xpath('//*[@id="account"]/div/a/i')
loginButton.click()
time.sleep(3)
copy_input('//*[@id="id"]', 'id')
time.sleep(1)
copy_input('//*[@id="pw"]', 'passwd')
time.sleep(1)
driver.find_element_by_xpath('//*[@id="frmNIDLogin"]/fieldset/input').click()
time.sleep(1)
driver.get('https://cafe.naver.com/ArticleRead.nhn?clubid=26377973&page=1&menuid=58&boardtype=L&articleid=103381&referrerAllArticles=false')
time.sleep(1)
driver.switch_to.default_content  #(1) 상위 프레임으로 전환
driver.switch_to.frame('cafe_main')    # 네이버까페의 경우  (New 명령어)
pText = driver.find_elements_by_xpath('//*[@id="tbody"]/div/div/div[2]/table[3]/tbody/tr[2]')
for p in pText:
    print(p.text)

