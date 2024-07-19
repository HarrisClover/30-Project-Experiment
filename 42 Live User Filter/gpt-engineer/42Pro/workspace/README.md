To implement this task, we will use Python with Flask as the web framework and SQLAlchemy as the ORM for database interactions. We will also use JavaScript with jQuery for the client-side scripting. The database will be SQLite for simplicity.

Here are the core classes, functions, and methods that will be necessary:

1. `User` class: This class will represent a user in the system. It will have attributes such as `id`, `name`, `location`, and `online_status`.

2. `UserSchema` class: This class will be used for serializing and deserializing `User` instances to and from JSON format.

3. `get_online_users` function: This function will query the database and return a list of online users.

4. `filter_users` function: This function will filter the list of online users based on the search query.

5. `app` Flask application: This is the main application object.

6. `@app.route('/')` function: This function will render the main page of the application.

7. `@app.route('/users', methods=['GET'])` function: This function will handle GET requests to the `/users` endpoint. It will return a list of online users in JSON format.

8. `@app.route('/users', methods=['POST'])` function: This function will handle POST requests to the `/users` endpoint. It will filter the list of online users based on the search query and return the result in JSON format.

9. `search` JavaScript function: This function will send a POST request to the `/users` endpoint with the search query and update the list of online users on the page.

Now let's start with the "entrypoint" file:

app.py
