const socket = io();

document.getElementById('roll-call').addEventListener('click', () => {
  socket.emit('roll-call');
});

socket.on('roll-call', (student) => {
  const info = document.getElementById('student-info');
  info.innerHTML = '';
  if (student.length > 0) {
    info.innerHTML = `Name: ${student[0].name}`;
  } else {
    info.innerHTML = 'No student found.'
  }
})