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
pipelinemodel = pickle.load(open('api//model_pkl2.pkl', 'rb'))

x_test = "I feel happy"
x_arr = 

x_arr.reshape(-1,1)
print(pipelinemodel.predict(x_arr))