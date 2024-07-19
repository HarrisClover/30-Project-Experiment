npm install --save-dev http-server

{
  "name": "water-tracker",
  "version": "1.0.0",
  "description": "A simple water tracker",
  "main": "script.js",
  "scripts": {
    "start": "http-server . -p 8000",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "http-server": "^0.12.3"
  }
}

npm start
