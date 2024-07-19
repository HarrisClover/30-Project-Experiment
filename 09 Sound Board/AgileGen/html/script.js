
function playAudio(word) {
    var audio = new Audio(word + ".mp3");
    audio.play();
    var card = event.target.closest(".card");
    card.classList.add("flipped");
}
