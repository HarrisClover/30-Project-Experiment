
function detectLanguage() {
    let text = document.getElementById('sourceText').value;
    if (text.trim() !== '') {
        // Simulate language detection
        document.getElementById('sourceLang').value = 'en'; // Example: detected English
    }
}

function translateText() {
    let sourceText = document.getElementById('sourceText').value;
    let targetLang = document.getElementById('targetLang').value;
    if (sourceText.trim() !== '' && targetLang !== '') {
        // Simulate translation
        document.getElementById('translatedText').value = "Translated to " + targetLang + ": " + sourceText;
        saveHistory(sourceText, targetLang, document.getElementById('translatedText').value);
    }
}

function saveHistory(sourceText, targetLang, translatedText) {
    let history = document.getElementById('translationHistory');
    let entry = document.createElement('div');
    entry.textContent = `From: ${sourceText} | To [${targetLang}]: ${translatedText}`;
    history.appendChild(entry);
}

function toggleHistory() {
    let historyPanel = document.getElementById('translationHistory');
    historyPanel.style.display = historyPanel.style.display === 'block' ? 'none' : 'block';
}
