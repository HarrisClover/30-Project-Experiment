
const participantInput = document.getElementById('participantInput');
const addParticipantButton = document.getElementById('addParticipantButton');
const rollCallList = document.getElementById('rollCallList');
const randomRollCallButton = document.getElementById('randomRollCallButton');
const participants = [];

addParticipantButton.addEventListener('click', () => {
  const participantName = participantInput.value;
  participants.push(participantName);
  participantInput.value = '';
  updateRollCallList();
});

randomRollCallButton.addEventListener('click', () => {
  if (participants.length > 0) {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const randomParticipant = participants[randomIndex];
    alert(`Randomly selected participant: ${randomParticipant}`);
  } else {
    alert('No participants added yet!');
  }
});

function updateRollCallList() {
  rollCallList.innerHTML = '';
  participants.forEach(participant => {
    const li = document.createElement('li');
    li.textContent = participant;
    rollCallList.appendChild(li);
  });
}
