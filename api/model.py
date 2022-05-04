# import matplotlib.pyplot as plt
# import numpy as np
# import pandas as pd

# import torch
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import confusion_matrix,classification_report,accuracy_score
# from sklearn.preprocessing import LabelEncoder

# from tensorflow.keras.utils import to_categorical
# from tensorflow.keras.preprocessing.text import Tokenizer
# from tensorflow.keras.preprocessing.sequence import pad_sequences

# from tensorflow.keras.optimizers import Adam
# from tensorflow.keras.models import Sequential
# from tensorflow.keras.callbacks import EarlyStopping
# from tensorflow.keras.layers import Dense, LSTM, Embedding, Bidirectional,Dropout

import pickle


from sklearn.feature_extraction.text import CountVectorizer
pipelinemodel = pickle.load(open('api//model_pkl_final.pkl', 'rb'))


x_test = ["I feel happy because I won the competition today and attended a party","I was sad because my dog died"]

result = pipelinemodel.predict(x_test)
emotionarr = ["negative emotion","positive emotion"] #0 - negative, 1 - positive
print(x_test[0] , ":", emotionarr[result[0]])
print(x_test[1] , ":", emotionarr[result[1]])




# create pipeline of data prep , countvectorizer, model 

