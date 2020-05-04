'''
LSTM + CNN with Tensorflow

남은 것
* 정답 데이터 제작
* 검증 (정답)데이터 로드
'''

import datetime as dt
from preprosess.WordsProcessor import WordsProcessor
from model.Model import Model as md

import numpy as np
import tensorflow as tf

if __name__ == "__main__":

    # 시드 고정
    seed = 0
    np.random.seed(seed)
    tf.random.set_seed(5)

    # 파일 전처리기 실행
    wp = WordsProcessor()

    # 파일 로딩 (1차 불용어 처리 re.sub)
    loadFile = wp.loading_file(defaultNum=800)

    # 불용어 처리
    wp.stopWording(loadFile[0], loadFile[1], loadFile[2], loadFile[3], loadFile[4], loadFile[5], loadFile[6])

    # 워드 원 핫 인코딩
    x_test,  = wp.wordHotEncoding(wp.get_wordDic().keys())

    # layer
    md.layer_maker()

