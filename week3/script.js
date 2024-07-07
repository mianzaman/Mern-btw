document.getElementById('text-input').addEventListener('input', updateCounts);

function updateCounts() {
    const text = document.getElementById('text-input').value;
    document.getElementById('char-count').innerText = text.length;
    document.getElementById('word-count').innerText = countWords(text);
    document.getElementById('sentence-count').innerText = countSentences(text);
    document.getElementById('paragraph-count').innerText = countParagraphs(text);
    document.getElementById('space-count').innerText = countSpaces(text);
    document.getElementById('letter-count').innerText = countLetters(text);
    document.getElementById('digit-count').innerText = countDigits(text);
    document.getElementById('special-char-count').innerText = countSpecialChars(text);
}

function countWords(text) {
    return text.trim().split(/\s+/).filter(word => word).length;
}

function countSentences(text) {
    return text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
}

function countParagraphs(text) {
    return text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
}

function countSpaces(text) {
    return text.split(' ').length - 1;
}

function countLetters(text) {
    return text.replace(/[^a-zA-Z]/g, '').length;
}

function countDigits(text) {
    return text.replace(/[^0-9]/g, '').length;
}

function countSpecialChars(text) {
    return text.replace(/[a-zA-Z0-9\s]/g, '').length;
}
