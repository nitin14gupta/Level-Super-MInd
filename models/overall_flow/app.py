from langflow.load import run_flow_from_json
import warnings
import logging
import json
import uuid
session_id = str(uuid.uuid4())  # Generates a unique session ID


warnings.filterwarnings("ignore")  # Suppress warnings
logging.getLogger("langchain").setLevel(logging.ERROR)  # Suppress langchain logs

description = "i want to start an education business"
industry = "education"
TWEAKS = {
  "TextInput-6hSnG": {"input_value":description},
  "TextInput-KwOQK": {"input_value":industry}
}

result = run_flow_from_json(flow="ART GENERATOR.json",
                            input_value="message",
                            session_id=session_id, # provide a session id if you want to use session state
                            fallback_to_env_vars=False, # False by default
                            tweaks=TWEAKS)
# Assuming result contains the output returned from the flow
message = result[0].outputs[0].results['text']
print(message)
