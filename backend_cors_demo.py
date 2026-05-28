"""
FastAPI Backend Integration with CORS Configuration
File: backend_cors_demo.py

This file demonstrates the exact Python FastAPI backend setup you need.
It configures CORSMiddleware to explicitly authorize cross-origin requests
originating from your live domain: http://agent-ak.com.

How to run this demo locally:
-----------------------------
1. Install requirements:
   pip install fastapi uvicorn pydantic

2. Run the server:
   python backend_cors_demo.py
   (Starts local server on http://localhost:8000)

3. Expose via Ngrok:
   ngrok http 8000

4. Copy the resulting Ngrok URL (e.g., https://1234-abcd.ngrok-free.app)
   and paste it into the `API_URL` variable in your `orbit-chat.js` file!
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import time

app = FastAPI(
    title="Orbit Agent Backend",
    description="Local FastAPI helper for Orbit chatbot widget with CORS authorization.",
    version="1.0.0"
)

# ==============================================================================
# 🔒 MANDATORY CORS CONFIGURATION FOR AGENT-AK.COM
# ==============================================================================
# When your front-end is hosted at http://agent-ak.com, your browser will block
# any fetch calls to a different domain (like your local Ngrok tunnel) unless
# the backend explicitly responds with headers approving that origin.

# List of authorized front-end websites allowed to talk to your laptop's API:
origins = [
    "http://agent-ak.com",   # Your live website domain
    "https://agent-ak.com",  # Authorize both secure HTTPS and standard HTTP
    "http://localhost:5173", # Allow your local Vite development server
    "http://127.0.0.1:5173", # Allow local loopback Dev Server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # Explicitly allow these domains to make requests
    allow_credentials=True,           # Permits standard cookies/auth headers if needed
    allow_methods=["POST", "OPTIONS"],# Permits specified HTTP verbs (POST for chat, OPTIONS for preflight checks)
    allow_headers=["*"],              # Authorizes all custom headers (e.g. Content-Type)
)


# ==============================================================================
# 📝 PYDANTIC SCHEMAS FOR API INPUT/OUTPUT VALIDATION
# ==============================================================================
class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str


# ==============================================================================
# 🤖 CHAT API ENDPOINT
# ==============================================================================
@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(payload: ChatRequest):
    """
    POST route: /api/chat
    Accepts JSON body: {"message": "user input here"}
    Returns JSON body: {"response": "agent output here"}
    """
    user_input = payload.message.strip()
    
    if not user_input:
        raise HTTPException(status_code=400, detail="Message cannot be empty.")
    
    print(f"📥 Received user query: '{user_input}'")

    # --- SIMULATED AGENT THINKING / LLM GENERATION CYCLE ---
    # Here, you would plug in your actual local LLM pipeline (e.g., LangChain, Ollama, LlamaIndex)
    # For demonstration, we match intent and reply:
    query = user_input.lower()
    
    if "what is orbit" in query:
        response_text = (
            "Orbit Agent is a personal local assistant designed for secure productivity. "
            "It runs lightweight models directly on your hardware to summarize emails, "
            "track your calendar events, and help organize tasks securely."
        )
    elif "private" in query or "secure" in query:
        response_text = (
            "Orbit is completely privacy-first. Everything executes directly on your machine "
            "using your CPU and GPU. Your files, logs, and prompt contexts never transit "
            "through cloud servers or external companies."
        )
    elif "demo" in query:
        response_text = (
            "I'd love to show you a demo! Once you have Orbit running locally, navigate to "
            "our setup dashboard. You can link your local calendar and email to see "
            "automated scheduling in action."
        )
    else:
        # Default reply
        response_text = (
            f"I received your query: '{user_input}'. This response is sent directly from your local "
            "FastAPI backend! Once you integrate your local LLM pipeline, I will generate "
            "intelligent custom replies to all your commands."
        )

    # Simulate network/thinking latency so the "Agent is typing..." loader shows nicely
    time.sleep(0.8)

    print(f"📤 Responding: '{response_text}'")
    return ChatResponse(response=response_text)


# ==============================================================================
# 🚀 SERVER STARTUP ENTRYPOINT
# ==============================================================================
if __name__ == "__main__":
    # Start the server on port 8000 (accessible locally at http://127.0.0.1:8000)
    uvicorn.run("backend_cors_demo:app", host="127.0.0.1", port=8000, reload=True)
