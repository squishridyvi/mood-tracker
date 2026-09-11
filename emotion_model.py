from transformers import pipeline

# Load the emotion analysis pipeline
emotion_analyzer = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", top_k=None)
print(emotion_analyzer("I am feeling great today!"))