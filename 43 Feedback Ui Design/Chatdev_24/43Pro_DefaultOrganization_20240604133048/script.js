// Function to handle the submission of the review
function sendReview() {
  var satisfaction = document.getElementById("satisfaction").value;
  // You can perform any necessary actions with the selected satisfaction value here
  alert("Thank you for your review!");
  var reviewContainer = document.getElementById("review-container");
  var reviewMessage = document.createElement("p");
  reviewMessage.textContent = "Thank you for your review!";
  reviewContainer.appendChild(reviewMessage);
}
// Event listener for the "Send Review" button
document.getElementById("send-review").addEventListener("click", sendReview);