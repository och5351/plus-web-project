from eunjeon import Mecab
from preprosess.StopWords import StopWords

class Loader:

    m = Mecab()
    st = StopWords()

    count = 0
    # 텍스트 로드
    def __init__(self, count):
        self.count = count

    def foodCategory_load_file(self, editCount = 0):
        count = self.count
        if editCount != 0:
            count = editCount
        resultList = []
        for c in range(count):
            f = open("C:/Users/och5351/Desktop/plus_web_crawling/FoodCategory/FoodCategory%05d.txt" %
                     ( c ), 'r', -1, "utf-8")
            data = f.read()
            f.close()
            data = data.replace('xa0','') # 불용어 처리
            data = data.lstrip()
            data = self.st.pre_stopWord(data)
            data = self.m.morphs(data)
            resultList.append(data)
        return resultList

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
        return resultList

    def mobielCategory_load_file(self, editCount = 0):
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
        return resultList

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
        return resultList

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
        return resultList

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
        return resultList

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
        return resultList