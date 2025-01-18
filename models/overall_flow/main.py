from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Union
import requests
import json
from dotenv import load_dotenv
import os

load_dotenv()



# Initialize FastAPI app
app = FastAPI()

# Constants
BASE_API_URL = os.getenv('BASE_API_URL')
LANGFLOW_ID = os.getenv('LANGFLOW_ID')
APPLICATION_TOKEN = os.getenv('APPLICATION_TOKEN')

# Input model for the FastAPI endpoint
class ResearcherRequest(BaseModel):
    description: str
    industry: str

# Function to run the LangFlow API
def run_flow(description: str, industry: str) -> Dict:
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/art"

    # Payload tweaks for LangFlow API
    tweaks = {
        "TextInput-6hSnG": {"input_value": description},
        "TextInput-KwOQK": {"input_value": industry}
    }
    payload = {
        "input_value": "",
        "output_type": "chat",
        "input_type": "chat",
        "tweaks": tweaks
    }
    headers = {"Authorization": f"Bearer {APPLICATION_TOKEN}", "Content-Type": "application/json"}

    # Make API request
    response = requests.post(api_url, json=payload, headers=headers)
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Error in LangFlow API")

    response_data = response.json()

    # Extract and clean multiple outputs
    outputs = {}
    try:
        for idx, output in enumerate(response_data['outputs'][0]['outputs']):
            raw_text = output['results']['text']['data']['text']
            try:
                # Parse and structure the JSON output if possible
                parsed_data = json.loads(raw_text)
                outputs[f"output_text_{idx + 1}"] = parsed_data
            except json.JSONDecodeError:
                # If it's not JSON, return the raw text
                outputs[f"output_text_{idx + 1}"] = raw_text
    except (KeyError, IndexError):
        raise HTTPException(status_code=500, detail="Error parsing LangFlow API response")
    
    return outputs

# FastAPI endpoint
@app.post("/researcher")
async def researcher_endpoint(request: ResearcherRequest):
    
    try:
        result = run_flow(request.description, request.industry)
        return {"status": "success", "data": result}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
