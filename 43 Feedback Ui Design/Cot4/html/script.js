
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var radios = document.getElementsByName('satisfaction');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            value = radios[i].value;       
            break;
        }
    }
    document.getElementById('confirmationMsg').innerHTML = "Thank you for your feedback. You selected: " + value;
});
