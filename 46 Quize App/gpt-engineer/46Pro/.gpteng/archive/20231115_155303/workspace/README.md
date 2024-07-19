To implement this, we will use Flask, a Python micro web framework, along with HTML, CSS, and JavaScript for the frontend. We will also use SQLAlchemy as our ORM to interact with the database where we will store our questions and answers.

Here are the core classes and functions we will need:

1. `app.py`: This is the entry point of our application. It will contain the Flask application instance and the routes for our website.

2. `models.py`: This file will contain the SQLAlchemy models for our database tables.

3. `forms.py`: This file will contain the WTForms form definitions for our question form.

4. `templates/`: This directory will contain our HTML templates.

5. `static/`: This directory will contain our static files like CSS and JavaScript.

6. `requirements.txt`: This file will list all the Python dependencies needed for our project.

Let's start with the `requirements.txt` file:

requirements.txt
