document.addEventListener('DOMContentLoaded', () => {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const nameList = document.getElementById('nameList');
    const rollCallButton = document.getElementById('rollCallButton');     
    const selectedName = document.getElementById('selectedName');

    let names = [];

    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        if (name) {
            names.push(name);
            updateNameList();
            nameInput.value = '';
        }
    });

    rollCallButton.addEventListener('click', () => {
        if (names.length > 0) {
            const randomIndex = Math.floor(Math.random() * names.length); 
            selectedName.textContent = `Selected: ${names[randomIndex]}`; 
        } else {
            selectedName.textContent = 'No names available for roll call.';
        }
    });

    function updateNameList() {
        nameList.innerHTML = '';
        names.forEach((name, index) => {
            const li = document.createElement('li');
            li.textContent = name;
            nameList.appendChild(li);
        });
    }
});