'''
LSTM + CNN with Tensorflow
'''
#from tensorflow.keras.preprocessing import sequence
#from tensorflow.keras.layers import Dense, Dropout, Activation, Embedding, LSTM, Conv1D, MaxPooling1D
#from tensorflow.keras.models import Sequential
#import tensorflow.keras.utils as kerasUtil
#from tensorflow.keras.preprocessing.text import Tokenizer
import datetime as dt


from preprosess.WordsProcessor import WordsProcessor


if __name__ == "__main__":
    # 데이터 전처리
    wp = WordsProcessor() # 파일 전처리기 실행

    loadFile = wp.loading_file(defaultNum=1000) # 파일 로딩 (1차 불용어 처리 re.sub)

    # 불용어 처리
    wp.stopWording(loadFile[0], loadFile[1], loadFile[2], loadFile[3], loadFile[4], loadFile[5], loadFile[6])

    print(wp.get_wordDic())
    print(len(wp.get_wordDic()))

