'''

preprocess file
using text file(crawling file)

'''

from eunjeon import Mecab
from preprosess.StopWords import StopWords

class WordsProcessor:

    articleMemory = []
    resultArticleMemory = []
    dataCount = 0
    m = Mecab()
    st = StopWords()
    def __init__(self,count):
        print("문자 전처리기를 사용할 준비가 되었습니다.\n")
        self.count = count


    def foodCategory_load_file(self):

        for c in range(self.count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/FoodCategory/FoodCategory%05d.txt" % ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0','') # 불용어 처리
            data = data.lstrip()
            data = self.m.morphs(data)
            #print(data)

        self.st.load_stopWordsDic()
