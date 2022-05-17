from flask import Flask
from config import Config

app = Flask(__name__)

# Initialize Configurations
app.config.from_object(Config)

from app import routes
