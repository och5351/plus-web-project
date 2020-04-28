'''
LSTM + CNN with Tensorflow
'''
from tensorflow.keras.preprocessing import sequence
from tensorflow.keras.layers import Dense, Dropout, Activation, Embedding, LSTM, Conv1D, MaxPooling1D
from tensorflow.keras.models import Sequential
import tensorflow.keras.utils as kerasUtil
from tensorflow.keras.preprocessing.text import Tokenizer
import datetime as dt



if __name__ == "__main__":
    # execute only if run as a script
    print("main")
