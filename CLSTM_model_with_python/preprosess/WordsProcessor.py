'''

preprocess file
using text file(crawling file)

'''

from preprosess.StopWords import StopWords
from preprosess.Loader import Loader
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

class WordsProcessor:

    studyWordsDic = []
    validateWordsDic = []
    st = StopWords()
    load = None

    def __init__(self):
        self.st.load_stopWordsDic() # 불용어 사전 로드

    # 파일 로드
    def loading_file(self, defaultNum = 1000 ,foodNum = 0, gameNum = 0, mobileNum = 0,
                     musicNum = 0, paintNum = 0, travelPhotoNum = 0, textNum = 0):

        self.load = Loader(defaultNum)
        # index : 0 => 학습 데이터 // index : 1 => 검증 데이터

        # 수집된 데이터 메모리 로드 function(count= 숫자로 조정 가능)
        foodCategory = self.load.foodCategory_load_file(editCount=foodNum)
        gameCategory = self.load.gameCategory_load_file(editCount=gameNum)
        mobileCategory = self.load.mobileCategory_load_file(editCount=mobileNum)
        musicCategory = self.load.musicCategory_load_file(editCount=musicNum)
        paintCategory = self.load.paintCategory_load_file(editCount=paintNum)
        textCategory = self.load.textCategory_load_file(editCount=textNum)
        travelPhotoCategory = self.load.travelPhotoCategory_load_file(editCount=travelPhotoNum)

        return foodCategory, gameCategory, mobileCategory, \
               musicCategory, paintCategory, travelPhotoCategory, textCategory

    # 불용어 처리 및
    def stopWording(self, foodCategory, gameCategory, mobileCategory, \
               musicCategory, paintCategory, travelPhotoCategory, textCategory):
        self.studyWordsDic, self.validateWordsDic = self.st.stopWording(foodCategory, self.studyWordsDic, self.validateWordsDic)
        self.studyWordsDic, self.validateWordsDic = self.st.stopWording(gameCategory, self.studyWordsDic, self.validateWordsDic)
        self.studyWordsDic, self.validateWordsDic = self.st.stopWording(mobileCategory, self.studyWordsDic, self.validateWordsDic)
        self.studyWordsDic, self.validateWordsDic = self.st.stopWording(musicCategory, self.studyWordsDic, self.validateWordsDic)
        self.studyWordsDic, self.validateWordsDic = self.st.stopWording(paintCategory, self.studyWordsDic, self.validateWordsDic)
        self.studyWordsDic, self.validateWordsDic = self.st.stopWording(travelPhotoCategory, self.studyWordsDic, self.validateWordsDic)
        self.studyWordsDic, self.validateWordsDic = self.st.stopWording(textCategory, self.studyWordsDic, self.validateWordsDic)

    def wordHotEncoding(self, x_test):
        token = Tokenizer()
        token.fit_on_texts(x_test)
        x = token.texts_to_sequences(x_test)
        paddingNum = 200
        padded_x = pad_sequences(x, paddingNum)
        word_size = len(token.word_index) + 1

        return padded_x, paddingNum, word_size

    def get_wordDic(self):
        return self.studyWordsDic, self.validateWordsDic

    def get_y(self):
        y_test, y_val = self.load.get_y()
        return y_test, y_val