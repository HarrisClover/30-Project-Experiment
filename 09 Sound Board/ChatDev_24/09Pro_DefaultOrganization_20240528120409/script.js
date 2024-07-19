/**
 * Plays the specified sound file.
 * @param {string} soundFile - The path to the sound file.
 */
function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.onerror = function() {
        console.error('Failed to play sound:', soundFile);
        // Display an error message to the user
    };
    audio.play();
}