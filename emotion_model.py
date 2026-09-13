from transformers import pipeline
from fastapi import FastAPI 
from pydantic import BaseModel

# Loading the emotion analysis pipeline
emotion_analyzer = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", top_k=None)

# Creating a FastAPI app
class Entry(BaseModel):
    text: str
    
app = FastAPI()

@app.post("/analyze-emotion")
def analyze_emotion(entry: Entry):
    return emotion_analyzer(entry.text)[0]
