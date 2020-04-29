import re

class StopWords:
    stopWordsDic = []

    # 불용어 사전 업로드
    def load_stopWordsDic(self):
        f = open('stopwordsKorean.txt', 'r', -1, "utf-8")
        self.stopWordsDic = f.readlines()
        f.close()
        self.stopWordsDic = [x.replace("\n", "") for x in self.stopWordsDic]

    def pre_stopWord(self, data):
        data = re.sub("[-=+,#/\?:%$.@*\"※~&%!\\'|\(\)\[\]\<\>`\'\\\\n\\\\t{}◀▶▲☞“”ⓒ◇]", "", data)
        return data

    def stopWording(self, data, tempDic):
        for post in data:
            for word in post:
                if word not in self.stopWordsDic:
                    tempDic[word] = tempDic.get(word, 0)

        return tempDic