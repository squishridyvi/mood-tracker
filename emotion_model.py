from transformers import pipeline
from fastapi import FastAPI 
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Loading the emotion analysis pipeline
emotion_analyzer = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", top_k=None)

class Entry(BaseModel):
    text: str

# Creating a FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5501"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/analyze-emotion")
def analyze_emotion(entry: Entry):
    return emotion_analyzer(entry.text)[0]
