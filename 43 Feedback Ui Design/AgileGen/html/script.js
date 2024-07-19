
document.getElementById("send-review").addEventListener("click", function() {
  var satisfactionOptions = document.getElementsByName("satisfaction");
  var selectedSatisfaction = "";
  
  for (var i = 0; i < satisfactionOptions.length; i++) {
    if (satisfactionOptions[i].checked) {
      selectedSatisfaction = satisfactionOptions[i].value;
      break;
    }
  }
  
  if (selectedSatisfaction !== "") {
    alert("Thank you for your feedback! Your " + selectedSatisfaction.toLowerCase() + " feedback has been successfully submitted.");
  } else {
    alert("Please select a satisfaction level before submitting your feedback.");
  }
});
