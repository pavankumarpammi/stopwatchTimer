// console.log("hello");
const mintueLabel =document.getElementById('minutes');
const secondsLabel =document.getElementById('seconds');
const milliLabel =document.getElementById('milli');

const startButton =document.getElementById('startBtn');
const stopButton =document.getElementById('stopBtn');
const pauseButton =document.getElementById('pauseBtn');
const resetButton =document.getElementById('resetBtn')

const laplist =document.getElementById('laplist');

///stop watch variables

let minutes =0;
let seconds =0;
let milli =0;
let interval;

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);

function startTimer()
{
  interval =setInterval(updateTimer,10);
  startButton.disabled =true;
  pauseButton.disabled=false;
  // padTime();
}
function stopTimer()
{
  addTolaplist();
}
function pauseTimer()
{
 clearInterval(interval);
 pauseButton.disabled=true;
 startButton.disabled=false;
}
function resetTimer()
{
  clearInterval(interval);
  resetTimerData();
  // resetButton.disabled=true;
  startButton.disabled=false;
}
function updateTimer()
{
  milli++;
  if(milli===100) ///1000 milli seconds = 1 sec but stopwatch timer run fast
  {
    milli=0;
    seconds++;
    if(seconds===60)
    {
      seconds=0;
      minutes++;
    }
    }
    displayTimer();
}
function displayTimer()
{
  mintueLabel.textContent=padTime(minutes);
  secondsLabel.textContent=padTime(seconds);
  milliLabel.textContent=padTime(milli);

}
function padTime(time){
  return time.toString().padStart(2,'0');
}
function resetTimerData()
{
  minutes=0;
  seconds=0;
  milli=0;
  displayTimer();
 clear(laplist);
}
function addTolaplist()
{
  const laptime =`${padTime(minutes)}:${padTime(seconds)}:${padTime(milli)}`;
  const listItem =document.createElement('li');
  listItem.innerHTML=`<span>Lap ${laplist.childElementCount+1}:</span>${laptime}`;
  laplist.appendChild(listItem);
}
