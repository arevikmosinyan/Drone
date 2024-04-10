let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let dronesContainer = document.getElementById('dronesContainer');
let positionX = 0;
let positionY = 0;
const step = 10;

document.addEventListener('keydown', function (event) {
  let droneSet = document.querySelectorAll('.drone');
  let drone1 = droneSet[0];
  let drone2 = droneSet[1];

  const step = 10;
  // //rotate the drone to the left
  // if (event.key === 'q') {
  //   dronesContainer.style.transform = 'rotate(90deg)';
  // }
  // //rotate the drone to the roght
  // if (event.key === 'e') {
  //   dronesContainer.style.transform = 'rotate(-90deg)';
  // }

  if (event.key === 'ArrowLeft' || event.key === 'a') {
    if (positionX - 60 > 0) {
      positionX -= step;
      dronesContainer.style.left = positionX + 'px';
      dronesContainer.style.transform = 'rotate(-270deg)';
    }
  }
  if (event.key === 'ArrowUp' || event.key === 'w') {
    if (positionY > 20) {
      positionY -= step;
      dronesContainer.style.top = positionY + 'px';
      dronesContainer.style.transform = 'rotate(-180deg)';
    }
  }
  if (event.key === 'ArrowRight' || event.key === 'd') {
    if (positionX + dronesContainer.offsetHeight + 50 < windowWidth) {
      console.log(dronesContainer.offsetWidth + 'dronesContainer.offsetWidth');
      console.log(drone2.offsetWidth + 'drone2.offsetWidth');
      console.log(drone1.offsetWidth + 'drone1.offsetWidth');
      positionX += step;
      dronesContainer.style.left = positionX + 'px';
      dronesContainer.style.transform = 'rotate(-90deg)';
    }
  }
  if (event.key === 'ArrowDown' || event.key === 's') {
    if (positionY + dronesContainer.offsetHeight + 50 < windowHeight) {
      positionY += step;
      dronesContainer.style.top = positionY + 'px';
      dronesContainer.style.transform = 'rotate(0deg)';
    }
  }
});
