from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten, Embedding, LSTM, Conv1D, MaxPooling1D, Dropout, Activation

class Model:

    model = None
    history = None

    def layer_maker(self, paddingNum, word_size):
        self.model = Sequential()
        self.model.add(Embedding(word_size, 100, input_length=paddingNum))
        self.model.add(Dropout(0.5))
        self.model.add(Conv1D(64,5,padding='valid',activation='relu'))
        self.model.add(MaxPooling1D(pool_size=4))
        self.model.add(LSTM(55))
        self.model.add(Dense(8))
        self.model.add(Activation('sigmoid'))
        self.model.summary()

        self.model.compile(loss='categorical_crossentropy',
                      optimizer='adam',
                      metrics=['accuracy'])

    def run_model(self, padding_x, y_data, x_test, y_test):
        self.history = self.model.fit(padding_x, y_data, batch_size=100, epochs=20, validation_data=(x_test, y_test))

