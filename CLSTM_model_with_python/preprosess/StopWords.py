

class StopWords:
    def __init__(self):
        print("불용어 처리가 준비 되었습니다.\n")

    # 불용어 사전 업로드
    def load_stopWordsDic(self):
        f = open('stopwordsKorean.txt',
                 'r', -1, "utf-8")
        data = f.readlines()
        f.close()
        data = [x.replace("\n", "") for x in data]
        return data
