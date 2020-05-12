'''
LSTM + CNN with Tensorflow

남은 것
* model.fit error 찾기
'''

import datetime as dt
from preprosess.WordsProcessor import WordsProcessor
from model.Model import Model

import numpy as np
import tensorflow as tf

from tensorflow.keras.utils import to_categorical

if __name__ == "__main__":

    # 시드 고정
    seed = 0
    np.random.seed(seed)
    tf.random.set_seed(5)

    # 파일 전처리기 실행
    wp = WordsProcessor()
    # model 설정 클래스 호출
    md = Model()

    # 파일 로딩 (1차 불용어 처리 re.sub)
    loadFile = wp.loading_file(defaultNum=800)

    # 정답 데이터 호출
    y_train, y_val = wp.get_y()

    # 정답 데이터 categorical
    y_train = to_categorical(y_train, 7, dtype='float32')
    y_val = to_categorical(y_val, 7, dtype='float32')


    # 불용어 처리
    wp.stopWording(loadFile[0], loadFile[1], loadFile[2], loadFile[3], loadFile[4], loadFile[5], loadFile[6])

    # 워드 원 핫 인코딩
    x_train, x_val = wp.get_wordDic()

    train_padded_x, train_paddingNum, train_word_size = wp.wordHotEncoding(x_train)
    val_padded_x, val_paddingNum, val_word_size = wp.wordHotEncoding(x_val)

    #print(train_word_size)
    #print(val_word_size)

    md.layer_maker(train_paddingNum, train_word_size, learning_rate=0.0001)
    
    # 학습
    md.run_model(train_padded_x, y_train, val_padded_x, y_val)
