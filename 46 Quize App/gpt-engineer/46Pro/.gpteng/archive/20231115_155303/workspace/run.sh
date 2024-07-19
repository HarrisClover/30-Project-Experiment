# Create a virtual environment
python3 -m venv env

# Activate the virtual environment
source env/bin/activate

# Install the dependencies
pip install -r requirements.txt

# Run the application
FLASK_APP=app.py flask run
