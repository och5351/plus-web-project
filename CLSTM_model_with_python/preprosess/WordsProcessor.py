'''

preprocess file
using text file(crawling file)

'''

from preprosess.StopWords import StopWords
from preprosess.Loader import Loader
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

class WordsProcessor:

    wordsDic = {}
    resultArticleMemory = []
    dataCount = 0
    st = StopWords()
    load = None

    def __init__(self):
        self.st.load_stopWordsDic() # 불용어 사전 로드

    # 파일 로드
    def loading_file(self, defaultNum = 1000 ,foodNum = 0, gameNum = 0, mobileNum = 0,
                     musicNum = 0, paintNum = 0, travelPhotoNum = 0, textNum = 0):
        self.load = Loader(defaultNum)
        # 수집된 데이터 메모리 로드 function(count= 숫자로 조정 가능)
        foodCategory = self.load.foodCategory_load_file(editCount=foodNum)
        gameCategory = self.load.gameCategory_load_file(editCount=gameNum)
        mobileCategory = self.load.mobielCategory_load_file(editCount=mobileNum)
        musicCategory = self.load.musicCategory_load_file(editCount=musicNum)
        paintCategory = self.load.paintCategory_load_file(editCount=paintNum)
        travelPhotoCategory = self.load.travelPhotoCategory_load_file(editCount=travelPhotoNum)
        textCategory = self.load.textCategory_load_file(editCount=textNum)

        return foodCategory, gameCategory, mobileCategory, \
               musicCategory, paintCategory, travelPhotoCategory, textCategory

    # 불용어 처리 및
    def stopWording(self, foodCategory, gameCategory, mobileCategory, \
               musicCategory, paintCategory, travelPhotoCategory, textCategory):
        self.wordsDic = self.st.stopWording(foodCategory, self.wordsDic)
        self.wordsDic = self.st.stopWording(gameCategory, self.wordsDic)
        self.wordsDic = self.st.stopWording(mobileCategory, self.wordsDic)
        self.wordsDic = self.st.stopWording(musicCategory, self.wordsDic)
        self.wordsDic = self.st.stopWording(paintCategory, self.wordsDic)
        self.wordsDic = self.st.stopWording(travelPhotoCategory, self.wordsDic)
        self.wordsDic = self.st.stopWording(textCategory, self.wordsDic)

    def wordHotEncoding(self, afterArr):
        afterArr = list(afterArr)
        token = Tokenizer()
        token.fit_on_texts(afterArr)
        print(token.word_index)


    def get_wordDic(self):
        return self.wordsDic