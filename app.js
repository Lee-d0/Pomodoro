const timerMilliSeconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector(".timer__seconds")
const timerMinutes = document.querySelector(".timer__minutes")
const startButton = document.querySelector(".stopwatch__start")
const stopButton = document.querySelector(".stopwatch__stop")
const resetButton = document.querySelector(".stopwatch__reset")


let cancelId;
let startTime;
let saveTime = 0;
const countdown = 25 * 60 * 1000



function startTimer(){
    startButton.disabled = true
    stopButton.disabled = false
    resetButton.disabled = false
    
    startTime = Date.now()

    cancelId = setInterval(updateTimer, 1000 / 60 )
}

function stopTimer(){
    startButton.disabled = false
    stopButton.disabled = true
    resetButton.disabled = false
    
    saveTime += Date.now() - startTime ;
   
    clearInterval(cancelId)
   

}

function resetTimer(){
    resetButton.disabled = true
    startTime = Date.now()
    saveTime = 0
    timerMilliSeconds.innerHTML = "000"
    timerSeconds.innerHTML = "00"
    timerMinutes.innerHTML = "25"
}

function updateTimer(){
    let millisElasped = Date.now() - startTime + saveTime

    let timeLeft = countdown - millisElasped

    if(timeLeft < 0){
        timeLeft = 0
        clearInterval(cancelId)
        cancelId = null
    }

    let secondsLeft = timeLeft / 1000
    let minutesLeft = secondsLeft / 60
   
    let milliText = timeLeft % 1000
    let secondsText = Math.floor(secondsLeft) % 60
    let minutesText = Math.floor(minutesLeft)

    if(minutesText.toString().length === 1){
        minutesText = minutesText.toString().padStart(2, "0")
    }
    if(secondsText.toString().length === 1){
        secondsText = secondsText.toString().padStart(2, "0")
    }
    if(milliText.toString().length < 3){
        milliText = milliText.toString().padStart(3, "000")
    }
    

    timerMilliSeconds.innerHTML = milliText 
    timerSeconds.innerHTML = secondsText
    timerMinutes.innerHTML = minutesText
    // if(cancelId){
    //     // cancelId = requestAnimationFrame(updateTimer)
    // }
    
}