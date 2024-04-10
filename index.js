let fromDown = false;
let fromRight = false;
let count = 0;

document.addEventListener('keydown', function (event) {
  let droneSet = document.querySelectorAll('.drone');
  let drone1 = droneSet[0];
  let drone2 = droneSet[1];
  let dronesContainer = document.getElementById('dronesContainer');
  let currentTop1 = parseInt(drone1.style.top) || 0;
  let currentTop2 = parseInt(drone2.style.top) || 0;

  const step = 10;

  if (event.key === 'ArrowLeft') {
    dronesContainer.classList.remove(
      'rotate-up',
      'rotate-right',
      'rotate-down',
      // 'rotate-down-from-right',
      // 'rotate-right-from-down',
    );

    dronesContainer.classList.add('rotate-left');
  }
  if (event.key === 'ArrowUp') {
    dronesContainer.classList.remove(
      'rotate-left',
      'rotate-right',
      'rotate-down',
      // 'rotate-down-from-right',
      // 'rotate-right-from-down',
    );
    dronesContainer.classList.add('rotate-up');
  }
  if (event.key === 'ArrowRight') {
    // fromRight = true;
    dronesContainer.classList.remove(
      'rotate-up',
      'rotate-left',
      'rotate-down',
      // 'rotate-down-from-right',
    );
    // if (fromDown) {
    //   dronesContainer.classList.add('rotate-right-from-down');
    // } else {
    dronesContainer.classList.add('rotate-right');
    // }
  }
  if (event.key === 'ArrowDown') {
    // fromDown = true;
    dronesContainer.classList.remove(
      'rotate-right',
      'rotate-left',
      'rotate-up',
      // 'rotate-right-from-down',
    );
    // if (fromRight) {
    //   dronesContainer.classList.add('rotate-down-from-right');
    // } else {
    dronesContainer.classList.add('rotate-down');
    // }
    //setTimeout(() => dronesContainer.classList.remove('rotate-down'), 500);
  }

  currentTop1 += step;
  currentTop2 += step;
  drone1.style.top = currentTop1 + 'px';
  drone2.style.top = currentTop2 + 'px';
});
