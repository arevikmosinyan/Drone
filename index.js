document.addEventListener('keydown', function (event) {
  let droneSet = document.querySelectorAll('.drone');
  let drone1 = droneSet[0];
  let drone2 = droneSet[1];

  let currentTop1 = parseInt(drone1.style.top) || 0;
  let currentLeft1 = parseInt(drone1.style.left) || 0;
  let currentTop2 = parseInt(drone2.style.top) || 0;
  let currentLeft2 = parseInt(drone2.style.left) || 0;

  const step = 10;

  if (event.key === 'ArrowUp') {
    currentTop1 -= step;
    currentTop2 -= step;
  }
  if (event.key === 'ArrowDown') {
    currentTop1 += step;
    currentTop2 += step;
  }
  if (event.key === 'ArrowLeft') {
    currentLeft1 -= step;
    currentLeft2 -= step;
  }
  if (event.key === 'ArrowRight') {
    currentLeft1 += step;
    currentLeft2 += step;
  }

  drone1.style.top = currentTop1 + 'px';
  drone1.style.left = currentLeft1 + 'px';

  drone2.style.top = currentTop2 + 'px';
  drone2.style.left = currentLeft2 + 'px';
});
