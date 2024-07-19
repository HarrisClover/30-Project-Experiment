function rollCall() {
    var students = ["Alice", "Bob", "Charlie", "David", "Eve"];
    if (students.length === 0) {
        document.getElementById("result").innerHTML = "All students have been called.";
        return;
    }
    var randomIndex = Math.floor(Math.random() * students.length);
    var randomStudent = students[randomIndex];
    students.splice(randomIndex, 1); // Remove the called student from the array
    document.getElementById("result").innerHTML = "Roll Call: " + randomStudent;
}
document.getElementById("rollCallButton").addEventListener("click", rollCall);