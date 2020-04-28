'''

preprocess file
using text file(crawling file)

'''

from eunjeon import Mecab

class WordsProcessor:

    articleMemory = []
    resultArticleMemory = []

    def __init__(self):
        print("문자 전처리기를 사용할 준비가 되었습니다.")

    def load_file(self):
        f = open("stopwordsKorean.txt", 'r', -1, "utf-8")