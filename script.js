
function play(){

    setTextById('life',5)
    setTextById('play-score',0)
    
    addAttribute('home', 'hidden')
    addAttribute('score-board', 'hidden')
    removeAttribute('play-ground','hidden')
    
    continueGame()
        
}
function continueGame(){

    let alphabet= getRandomAlphabet()

    let displayChar= getTextElementById('display-char')
    displayChar.innerText= alphabet

    addAttribute(alphabet, 'bg-orange-400')

}