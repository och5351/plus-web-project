from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten, Embedding, LSTM, Conv1D, MaxPooling1D, Dropout, Activation
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

class Model:

    model = None
    history = None

    def layer_maker(self, paddingNum, word_size, learning_rate):
        self.model = Sequential()
        self.model.add(Embedding(word_size, 100))
        self.model.add(Dropout(0.5))
        self.model.add(Conv1D(64, 5, padding='valid', activation='relu'))
        self.model.add(MaxPooling1D(pool_size=4))
        self.model.add(LSTM(55, activation='tanh'))
        self.model.add(Dense(7, activation='softmax'))
        self.model.summary()
        # , input_length=paddingNum
        self.model.compile(loss='categorical_crossentropy',
                      optimizer=tf.keras.optimizers.Adam(learning_rate=learning_rate),
                      metrics=['accuracy'])

    def run_model(self, train_padding_x, y_train, val_padding_x, y_val):
        self.history = self.model.fit(train_padding_x, y_train, batch_size=50, epochs=20, validation_data=(val_padding_x, y_val))

        y_vloss = self.history.history['val_loss']
        y_loss = self.history.history['loss']

        x_len = np.arange(len(y_loss))
        plt.plot(x_len, y_vloss, marker='.', c='red', label='Testset_loss')
        plt.plot(x_len, y_loss, marker='.', c='blue', label='Trainset_loss')

        plt.legend(loc='upper right')
        plt.grid()
        plt.xlabel('epoch'
                   "\n Test Accuracy : %.4f" % (self.model.evaluate(val_padding_x, y_val)[1]))
        plt.ylabel('loss')
        plt.show()


