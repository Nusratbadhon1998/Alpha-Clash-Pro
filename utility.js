function getTextElementById(id) {

    let elem = document.getElementById(id)
    return elem
}

function getTextById(id) {
    let txt = document.getElementById(id).innerText
    return txt

}

function addAttribute(id, attributeName) {
    let elem = getTextElementById(id);
    elem.classList.add(attributeName)

}

function removeAttribute(id, attributeName) {
    let elem = getTextElementById(id);
    elem.classList.remove(attributeName)

}

function setTextById(id, value) {
    let score = getTextElementById(id)
    score.innerText = value
}

function getRandomAlphabet() {

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());

    let random = Math.round(Math.random() * 25)
    return alphabet[random]
}

function gameOver(displayChar) {
    addAttribute('play-ground', 'hidden')
    removeAttribute('score-board', 'hidden')
    removeAttribute(displayChar, 'bg-orange-400');

    let lastScore = getTextById('play-score')
    setTextById('final-score', lastScore)
}

document.addEventListener('keyup', function (e) {
    let displayChar = getTextById('display-char')
    displayChar = displayChar.toLowerCase()
    let pressedChar = e.key

    if (pressedChar === 'Escape') {
        gameOver(displayChar);
    }

    if (displayChar === pressedChar) {
        let score = parseInt(getTextById('play-score'))
        score += 1
        setTextById('play-score', score)
        removeAttribute(displayChar, 'bg-orange-400');
        continueGame();

    }
    else {
        let lifeCount = parseInt(getTextById('life'));
        lifeCount = lifeCount - 1;
        if (lifeCount <= 0) {
            gameOver(displayChar);
        }
        setTextById('life', lifeCount)

    }

})