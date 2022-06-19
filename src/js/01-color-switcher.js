
  const startBtnRef = document.querySelector('button[data-start]');
  const stopBtnRef = document.querySelector('button[data-stop]');
  const body = document.querySelector('body')

  let intervalId = null;
  let isActive = false;

  startBtnRef.addEventListener ('click', onStartBtnClick);
  stopBtnRef.addEventListener ('click', onStopBtnClick);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function onStartBtnClick() {
    if(isActive){
        return
    }
isActive = true;
    intervalId = setInterval(() => {body.style.backgroundColor = getRandomHexColor()}, 1000);
  }

function onStopBtnClick() {
    clearInterval(intervalId);
    isActive = false;
}