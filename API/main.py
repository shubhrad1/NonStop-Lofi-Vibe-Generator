#!/usr/bin/env python3
import uvicorn
import tensorflow as tf
from fastapi import FastAPI
from tensorflow import keras
app = FastAPI()

# MODEL = tf.keras.models.load_model("/Users/Aryan/Documents/Projects/NonStop-Lofi-Vibe-Generator/API/Saved_Models/1") 
MODEL = tf.keras.models.load_model("./Saved_Models/1") 

@app.get("/ping")
async def ping():
    return "This is Lofi Vibe"

@app.get("/predict")
async def predict():
    return "Hello! Everyone"

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)