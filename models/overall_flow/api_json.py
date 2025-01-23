from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import asyncio
import nest_asyncio
import json

from fastapi.middleware.cors import CORSMiddleware

# Apply nest_asyncio patch
nest_asyncio.apply()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://marketlenss.vercel.app", "http://localhost:3000", "http://localhost:3001"],  # Allow only this origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class FlowRequest(BaseModel):
    description: str
    industry: str
import json

@app.post("/researcher/")
async def run_flow(request: FlowRequest):
    from langflow.load import run_flow_from_json
    import warnings
    import logging

    warnings.filterwarnings("ignore")  # Suppress warnings
    logging.getLogger("langchain").setLevel(logging.ERROR)  # Suppress langchain logs

    # Set up tweaks
    TWEAKS = {
        "TextInput-6hSnG": {"input_value": request.description},
        "TextInput-KwOQK": {"input_value": request.industry}
    }

    try:
        # Run the flow
        result = run_flow_from_json(
            flow="ART GENERATOR.json",
            input_value="message",
            session_id="",  # Provide a session ID if needed
            fallback_to_env_vars=False,  # False by default
            tweaks=TWEAKS
        )

        # Process the outputs dynamically
        # Process the outputs dynamically
        # Process the outputs dynamically
        outputs = {}
        for i, output in enumerate(result[0].outputs):
            key = f"output_{i+1}"
            raw_text = output.results['text']  # This could be a string or an object like `Message`

            # Handle cases where raw_text is not a string
            if isinstance(raw_text, str):
                processed_text = raw_text.strip()  # Clean the string
            elif hasattr(raw_text, 'content'):  # If it's a `Message` object, extract the content
                processed_text = raw_text.content
            else:
                processed_text = str(raw_text)  # Fallback to converting to a string

            # Try parsing the text as JSON
            try:
                parsed = json.loads(processed_text)
                outputs[key] = parsed
            except (json.JSONDecodeError, TypeError):
                # If parsing fails, use the processed text
                outputs[key] = processed_text

        # Return the cleaned and simplified output
        return {"success": True, "outputs": outputs}



    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
