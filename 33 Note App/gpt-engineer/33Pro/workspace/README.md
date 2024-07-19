To create a Notes App in Python, we will need several classes and functions. Here's a high-level overview of the architecture:

1. `Note` class: This class will represent a single note. It will have properties like `title`, `content`, and `created_at`.

2. `Notebook` class: This class will represent a collection of notes. It will have methods to add, remove, and search for notes.

3. `App` class: This class will be the main entry point of the application. It will handle user input and output, and it will use a `Notebook` instance to perform operations on notes.

4. `main` function: This function will create an instance of the `App` class and start the application.

Now, let's start with the implementation. We'll put each class in its own file.

src/note.py
