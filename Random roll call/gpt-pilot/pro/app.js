const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const io = require('socket.io')(http);
const rollCall = require('./utilities/roll-call');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
mongoose.connect('mongodb://localhost:27017/pro', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.log(err));

app.use('/students', require('./routes/students'));

io.on('connection', (socket) => {
  socket.on('roll-call', () => {
    rollCall()
      .then(student => {
        io.emit('roll-call', student);
      });
  });
});

http.listen(PORT, function() {
  console.log(`Server is running on port: ${PORT}`);
});