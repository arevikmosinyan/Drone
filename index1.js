let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let dronesContainer = document.getElementById("dronesContainer");
let positionX = 0;
let positionY = 30;
let bigger = false;
let smaller = false;
let rotationDegree = 0;
let scaled = false;

/*---------------------------------------------------------------PopUp--------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const popUp = document.getElementById("popUp");
  const closeButton = document.getElementsByClassName("close")[0];
  popUp.style.display = "block";
  closeButton.onclick = function () {
    popUp.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  };
});

/*-------------------------------------------------------------------------------------------------------------------------*/

document.addEventListener("keydown", function (event) {
  const step = 7;

  /*-------------------------------Landing and taking off the Drone--------------------------------------------------------*/

  if (event.key === " " || event.key === "+") {
    if (smaller) {
      dronesContainer.style.transform = `scale(1) rotate(${rotationDegree}deg)`;
      scaled = false;
      smaller = false;
    } else {
      dronesContainer.style.transform = `scale(1.2) rotate(${rotationDegree}deg)`;
      bigger = true;
      scaled = true;
    }
  } else if (event.key === "ArrowUp" || event.key === "w") {
  } else if (event.key === "ArrowDown" || event.key === "s") {
  } else if (event.key === "Control" || event.key === "-") {
    if (bigger) {
      dronesContainer.style.transform = `scale(1) rotate(${rotationDegree}deg)`;

      scaled = false;
      bigger = false;
    } else {
      dronesContainer.style.transform = `scale(0.4) rotate(${rotationDegree}deg)`;
      smaller = true;
      scaled = true;
    }
  }

  /*---------------------------------------------------------------------------------------------------------------------------*/

  /*-----------------------------------------finding out if the drone is scaled or not, to make it moved with scaled transformation-------*/
  const startIndexOfScaleValue =
    dronesContainer.style.transform.indexOf("scale(");
  const endIndexOfScaleValue = dronesContainer.style.transform.indexOf(")");
  const scaledSizeString = dronesContainer.style.transform.slice(
    startIndexOfScaleValue + "scale(".length,
    endIndexOfScaleValue
  );

  /*-------------------------------------------------------------------------------------------------------------------------------------*/
  // rotate the drone to the left

  if (event.key === "q") {
    rotationDegree -= 90;
    if (scaled) {
      dronesContainer.style.transform = `scale(${scaledSizeString}) rotate(${rotationDegree}deg)`;
    } else {
      dronesContainer.style.transform = `rotate(${rotationDegree}deg)`;
    }
  }

  //rotate the drone to the right
  if (event.key === "e") {
    rotationDegree += 90;
    if (scaled) {
      dronesContainer.style.transform = `scale(${scaledSizeString}) rotate(${rotationDegree}deg)`;
    } else {
      dronesContainer.style.transform = `rotate(${rotationDegree}deg)`;
    }
  }
  /*-------------------------------------------------------------------------------------------------------------------------*/

  /*--------------------------------------------------Arrow keys---------------------------------------------------------------*/

  if (rotationDegree % 360 === 0) {
    if (event.key === "ArrowUp" || event.key === "w") {
      if (positionY + dronesContainer.offsetHeight + 50 < windowHeight) {
        positionY += step;
        dronesContainer.style.top = positionY + "px";
      }
    } else if (event.key === "ArrowDown" || event.key === "s") {
      if (positionY > 20) {
        positionY -= step;
        dronesContainer.style.top = positionY + "px";
      }
    } else if (event.key === "ArrowRight" || event.key === "d") {
      if (positionX - 60 > 0) {
        positionX -= step;
        dronesContainer.style.left = positionX + "px";
      }
    } else if (event.key === "ArrowLeft" || event.key === "a") {
      if (positionX + dronesContainer.offsetHeight + 50 < windowWidth) {
        positionX += step;
        dronesContainer.style.left = positionX + "px";
      }
    }
  }

  if (rotationDegree % 360 === -90 || rotationDegree % 360 === 270) {
    if (event.key === "ArrowUp" || event.key === "w") {
      if (positionX + dronesContainer.offsetHeight + 50 < windowWidth) {
        positionX += step;
        dronesContainer.style.left = positionX + "px";
      }
    }
    if (event.key === "ArrowDown" || event.key === "s") {
      if (positionX - 60 > 0) {
        positionX -= step;
        dronesContainer.style.left = positionX + "px";
      }
    }
    if (event.key === "ArrowRight" || event.key === "d") {
      if (positionY + dronesContainer.offsetHeight + 50 < windowHeight) {
        positionY += step;
        dronesContainer.style.top = positionY + "px";
      }
    }
    if (event.key === "ArrowLeft" || event.key === "a") {
      if (positionY > 20) {
        positionY -= step;
        dronesContainer.style.top = positionY + "px";
      }
    }
  }

  if (rotationDegree % 360 === -180 || rotationDegree % 360 === 180) {
    if (event.key === "ArrowUp" || event.key === "w") {
      if (positionY > 20) {
        positionY -= step;
        dronesContainer.style.top = positionY + "px";
      }
    }
    if (event.key === "ArrowDown" || event.key === "s") {
      if (positionY + dronesContainer.offsetHeight + 50 < windowHeight) {
        positionY += step;
        dronesContainer.style.top = positionY + "px";
      }
    }
    if (event.key === "ArrowRight" || event.key === "d") {
      if (positionX + dronesContainer.offsetHeight + 50 < windowWidth) {
        positionX += step;
        dronesContainer.style.left = positionX + "px";
      }
    }
    if (event.key === "ArrowLeft" || event.key === "a") {
      if (positionX - 60 > 0) {
        positionX -= step;
        dronesContainer.style.left = positionX + "px";
      }
    }
  }

  if (rotationDegree % 360 === -270 || rotationDegree % 360 === 90) {
    if (event.key === "ArrowUp" || event.key === "w") {
      if (positionX - 60 > 0) {
        positionX -= step;
        dronesContainer.style.left = positionX + "px";
      }
    }
    if (event.key === "ArrowDown" || event.key === "s") {
      if (positionX + dronesContainer.offsetHeight + 50 < windowWidth) {
        positionX += step;
        dronesContainer.style.left = positionX + "px";
      }
    }
    if (event.key === "ArrowRight" || event.key === "d") {
      if (positionY > 20) {
        positionY -= step;
        dronesContainer.style.top = positionY + "px";
      }
    }
    if (event.key === "ArrowLeft" || event.key === "a") {
      if (positionY + dronesContainer.offsetHeight + 50 < windowHeight) {
        positionY += step;
        dronesContainer.style.top = positionY + "px";
      }
    }
  }

  /*---------------------------------------------------------------------------------------------------------------------------*/

  /*--------------------------------------------------rotation vizualisation of the wings----------------------------------------------------*/

  let drone1WingRight = document.querySelector("#drone1WingRight");
  let drone1WingLeft = document.querySelector("#drone1WingLeft");
  let drone2WingRight = document.querySelector("#drone2WingRight");
  let drone2WingLeft = document.querySelector("#drone2WingLeft");

  let newDuration = "0.1s";
  let defaultDuration = "0.4s";

  //back wings are getting faster
  if (event.key === "ArrowUp" || event.key === "w") {
    drone1WingLeft.style.animationDuration = newDuration;
    drone1WingRight.style.animationDuration = newDuration;
  }
  //front wings are getting faster
  else if (event.key === "ArrowDown" || event.key === "s") {
    drone2WingRight.style.animationDuration = newDuration;
    drone2WingLeft.style.animationDuration = newDuration;
  }
  //left wings are getting faster
  else if (event.key === "ArrowRight" || event.key === "d") {
    drone1WingLeft.style.animationDuration = newDuration;
    drone2WingLeft.style.animationDuration = newDuration;
  }
  //right wings are getting faster
  else if (event.key === "ArrowLeft" || event.key === "a") {
    drone1WingRight.style.animationDuration = newDuration;
    drone2WingRight.style.animationDuration = newDuration;
  }

  document.addEventListener("keyup", function (event) {
    drone1WingRight.style.animationDuration = defaultDuration;
    drone1WingLeft.style.animationDuration = defaultDuration;
    drone2WingRight.style.animationDuration = defaultDuration;
    drone2WingLeft.style.animationDuration = defaultDuration;
  });

  /*----------------------------------------------------------------------------------------------------------------------------*/
});
