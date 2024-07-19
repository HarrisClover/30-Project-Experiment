
let students = [];

function addStudent() {
    const studentName = document.getElementById('student-name').value;
    if (studentName) {
        students.push(studentName);
        updateStudentList();
        document.getElementById('add-message').innerText = 'Student added successfully.';
        document.getElementById('student-name').value = '';
    }
}

function removeStudent() {
    const studentList = document.getElementById('student-list');
    const selectedStudent = studentList.value;
    if (selectedStudent) {
        students = students.filter(student => student !== selectedStudent);
        updateStudentList();
        document.getElementById('remove-message').innerText = 'Student removed successfully.';
    }
}

function updateStudentList() {
    const studentList = document.getElementById('student-list');
    const exclusionCheckboxes = document.getElementById('exclusion-checkboxes');
    studentList.innerHTML = '';
    exclusionCheckboxes.innerHTML = '';
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student;
        option.innerText = student;
        studentList.appendChild(option);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = student;
        const label = document.createElement('label');
        label.innerText = student;
        exclusionCheckboxes.appendChild(checkbox);
        exclusionCheckboxes.appendChild(label);
        exclusionCheckboxes.appendChild(document.createElement('br'));
    });
}

function rollCall() {
    const exclusionCheckboxes = document.getElementById('exclusion-checkboxes');
    const excludedStudents = [];
    exclusionCheckboxes.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            excludedStudents.push(checkbox.value);
        }
    });

    const eligibleStudents = students.filter(student => !excludedStudents.includes(student));
    if (eligibleStudents.length > 0) {
        const randomIndex = Math.floor(Math.random() * eligibleStudents.length);
        const selectedStudent = eligibleStudents[randomIndex];
        document.getElementById('selected-student').innerText = `Selected Student: ${selectedStudent}`;
    } else {
        document.getElementById('selected-student').innerText = 'No eligible students for roll call.';
    }
}
