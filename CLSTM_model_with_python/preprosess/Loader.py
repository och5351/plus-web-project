from eunjeon import Mecab
from preprosess.StopWords import StopWords

class Loader:

    m = Mecab()
    st = StopWords()
    y_test = []
    y_val = []

    count = 0
    # 텍스트 로드
    def __init__(self, count):
        self.count = count

    def foodCategory_load_file(self, editCount = 0):
        count = self.count
        if editCount != 0:
            count = editCount
        resultList = []

        # 학습 데이터 로딩
        for c in range(count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/FoodCategory/FoodCategory%05d.txt" %
                     ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '') # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            resultList.append(data)
            self.y_test.append(0)

        validateList = []
        # 검증 데이터 로딩
        for c in range(1000 - count):
            c += count
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/FoodCategory/FoodCategory%05d.txt" %
                     (c), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            validateList.append(data)
            self.y_val.append(0)

        return resultList, validateList

    def gameCategory_load_file(self, editCount = 0):
        count = self.count
        if editCount != 0:
            count = editCount
        resultList = []

        for c in range(count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/GameCategory/GameCategory%05d.txt" %
                     ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0','') # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            resultList.append(data)
            self.y_test.append(1)

        validateList = []
        # 검증 데이터 로딩
        for c in range(1000 - count):
            c += count
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/GameCategory/GameCategory%05d.txt" %
                     (c), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            validateList.append(data)
            self.y_val.append(1)

        return resultList, validateList

    def mobileCategory_load_file(self, editCount = 0):
        count = self.count
        if editCount != 0:
            count = editCount
        resultList = []

        for c in range(count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/MobileCategory/MobileCategory%05d.txt" %
                     ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0','') # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            resultList.append(data)
            self.y_test.append(2)

        validateList = []
        # 검증 데이터 로딩
        for c in range(1000 - count):
            c += count
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/MobileCategory/MobileCategory%05d.txt" %
                     (c), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            validateList.append(data)
            self.y_val.append(2)

        return resultList, validateList

    def musicCategory_load_file(self, editCount = 0):
        count = self.count
        if editCount != 0:
            count = editCount
        resultList = []

        for c in range(count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/MusicCategory/MusicCategory%05d.txt" %
                     ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0','') # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            resultList.append(data)
            self.y_test.append(3)

        validateList = []
        # 검증 데이터 로딩
        for c in range(1000 - count):
            c += count
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/MusicCategory/MusicCategory%05d.txt" %
                     (c), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            validateList.append(data)
            self.y_val.append(3)

        return resultList, validateList

    def paintCategory_load_file(self, editCount = 0):
        count = self.count
        if editCount != 0:
            count = editCount
        resultList = []

        for c in range(count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/PaintCategory/PaintCategory%05d.txt" %
                     ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0','') # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            resultList.append(data)
            self.y_test.append(4)

        validateList = []
        # 검증 데이터 로딩
        for c in range(1000 - count):
            c += count
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/PaintCategory/PaintCategory%05d.txt" %
                     (c), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            validateList.append(data)
            self.y_val.append(4)

        return resultList, validateList

    def textCategory_load_file(self, editCount = 0):
        count = self.count
        if editCount != 0:
            count = editCount
        resultList = []

        for c in range(count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/TextCategory/TextCategory%05d.txt" %
                     ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            resultList.append(data)
            self.y_test.append(5)

        validateList = []
        # 검증 데이터 로딩
        for c in range(1000 - count):
            c += count
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/TextCategory/TextCategory%05d.txt" %
                     (c), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            validateList.append(data)
            self.y_val.append(5)

        return resultList, validateList

    def travelPhotoCategory_load_file(self, editCount = 0):
        count = self.count
        if editCount != 0:
            count = editCount
        resultList = []

        for c in range(count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/TravelPhotoCategory/TravelPhotoCategory%05d.txt" %
                     ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            resultList.append(data)
            self.y_test.append(6)

        validateList = []
        # 검증 데이터 로딩
        for c in range(1000 - count):
            c += count
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/TravelPhotoCategory/TravelPhotoCategory%05d.txt" %
                     (c), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0', '')  # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            validateList.append(data)
            self.y_val.append(6)

        return resultList, validateList

    def get_y(self):
        return self.y_test, self.y_val
