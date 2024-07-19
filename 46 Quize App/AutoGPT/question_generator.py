import random

questions = [
    'What is the capital of France?',
    'What is the largest planet in our solar system?',
    'What is the main programming language used for web development?',
    'What is the command to print something in Python?',
    'What is the default port number for HTTP?',
    'What is the purpose of CSS in web development?',
    'What is the difference between HTML and HTML5?',
    'What is the purpose of a database in a web application?',
    'What is the difference between a compiler and an interpreter?',
    'What is the purpose of a firewall in network security?'
]

question = random.choice(questions)

options = [
    'A',
    'B',
    'C',
    'D'
]

random.shuffle(options)

{
    'question': question,
    'options': options
}