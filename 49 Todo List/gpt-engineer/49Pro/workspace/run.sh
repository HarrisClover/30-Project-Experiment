npm install http-server

{
  "name": "todo-list",
  "version": "1.0.0",
  "description": "A simple to-do list application",
  "main": "script.js",
  "scripts": {
    "start": "http-server . -p 8000",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "http-server": "^0.12.3"
  }
}

npm start
