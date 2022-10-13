const pauseBtn = document.getElementById("pauseTimer");
const startBtn = document.getElementById("startTimer");
const resetBtn = document.getElementById("resetTimer");
const timer = document.querySelector(".timerDisplay");
let int;
let [hours,minutes,seconds,milliSeconds]=[0,0,0,0]
console.log(startBtn)
startBtn.addEventListener("click", () => {

  if (int != null) {
    clearInterval(int);
  }
  int = setInterval(display, 10);
});
pauseBtn.addEventListener('click',()=>{
    clearInterval(int);

})
resetBtn.addEventListener('click',()=>{
    clearInterval(int);
    hours=0,minutes=0,seconds=0,milliSeconds=0
    timer.innerText = "00 : 00 : 00 : 000";

})

function display() {
    milliSeconds+=10
    if(milliSeconds>=1000){
        milliSeconds=0
        seconds+=1
        if(seconds >=60){
            seconds=0
            minutes+=1
            if(minutes>=60){
                minutes=0;
                hours+=1
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
      milliSeconds < 10
        ? "00" + milliSeconds
        : milliSeconds < 100
        ? "0" + milliSeconds
        : milliSeconds;

        timer.innerText = ` ${h} : ${m} : ${s} : ${ms}`;


}




