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
  const directions = {
    up: event.key === "ArrowUp" || event.key === "w",
    down: event.key === "ArrowDown" || event.key === "s",
    right: event.key === "ArrowRight" || event.key === "d",
    left: event.key === "ArrowLeft" || event.key === "a",
  };

  const correctDirection = Object.entries(directions).find(
    ([key, value]) => value
  );

  const movingDirection = correctDirection[0];

  const haveEnoughSpaceUp =
    positionY + dronesContainer.offsetHeight + 50 < windowHeight;
  const haveEnoughSpaceDown = positionY > 20;
  const haveEnoughSpaceRight = positionX - 60 > 0;
  const haveEnoughSpaceLeft =
    positionX + dronesContainer.offsetHeight + 50 < windowWidth;

  const degree = rotationDegree % 360;

  function position(x, y) {
    dronesContainer.style.left = x + "px";
    dronesContainer.style.top = y + "px";
  }

  function for0degree() {
    return {
      up: {
        valid: haveEnoughSpaceUp,
        action: () => {
          positionY += step;
        },
      },
      down: {
        valid: haveEnoughSpaceDown,
        action: () => {
          positionY -= step;
        },
      },
      right: {
        valid: haveEnoughSpaceRight,
        action: () => {
          positionX -= step;
        },
      },
      left: {
        valid: haveEnoughSpaceLeft,
        action: () => {
          positionX += step;
        },
      },
    };
  }

  function for_90And270degree() {
    return {
      up: {
        valid: haveEnoughSpaceLeft,
        action: () => {
          positionX += step;
        },
      },
      down: {
        valid: haveEnoughSpaceRight,
        action: () => {
          positionX -= step;
        },
      },
      right: {
        valid: haveEnoughSpaceUp,
        action: () => {
          positionY += step;
        },
      },
      left: {
        valid: haveEnoughSpaceDown,
        action: () => {
          positionY -= step;
        },
      },
    };
  }

  function for_180And180degree() {
    return {
      up: {
        valid: haveEnoughSpaceDown,
        action: () => {
          positionY -= step;
        },
      },
      down: {
        valid: haveEnoughSpaceUp,
        action: () => {
          positionY += step;
        },
      },
      right: {
        valid: haveEnoughSpaceLeft,
        action: () => {
          positionX += step;
        },
      },
      left: {
        valid: haveEnoughSpaceRight,
        action: () => {
          positionX -= step;
        },
      },
    };
  }

  function for_270And90degree() {
    return {
      up: {
        valid: haveEnoughSpaceRight,
        action: () => {
          positionX -= step;
        },
      },
      down: {
        valid: haveEnoughSpaceLeft,
        action: () => {
          positionX += step;
        },
      },
      right: {
        valid: haveEnoughSpaceDown,
        action: () => {
          positionY -= step;
        },
      },
      left: {
        valid: haveEnoughSpaceUp,
        action: () => {
          positionY += step;
        },
      },
    };
  }

  const rotates = {
    0: for0degree(),
    "-90": for_90And270degree(),
    "-180": for_180And180degree(),
    "-270": for_270And90degree(),
  };

  if (!degree) {
    if (movingDirection === "up" && haveEnoughSpaceUp) {
      rotates[0].up.action();
    }
    if (movingDirection === "down" && haveEnoughSpaceDown) {
      rotates[0].down.action();
    }
    if (movingDirection === "right" && haveEnoughSpaceRight) {
      rotates[0].right.action();
    }
    if (movingDirection === "left" && haveEnoughSpaceLeft) {
      rotates[0].left.action();
    }
    position(positionX, positionY);
  }

  if (degree === -90 || degree === 270) {
    if (movingDirection === "up" && haveEnoughSpaceLeft) {
      rotates["-90"].up.action();
    }
    if (movingDirection === "down" && haveEnoughSpaceRight) {
      rotates["-90"].down.action();
    }
    if (movingDirection === "right" && haveEnoughSpaceUp) {
      rotates["-90"].right.action();
    }
    if (movingDirection === "left" && haveEnoughSpaceDown) {
      rotates["-90"].left.action();
    }
    position(positionX, positionY);
  }

  if (degree === -180 || degree === 180) {
    if (movingDirection === "up" && haveEnoughSpaceDown) {
      rotates["-180"].up.action();
    }
    if (movingDirection === "down" && haveEnoughSpaceUp) {
      rotates["-180"].down.action();
    }
    if (movingDirection === "right" && haveEnoughSpaceLeft) {
      rotates["-180"].right.action();
    }
    if (movingDirection === "left" && haveEnoughSpaceRight) {
      rotates["-180"].left.action();
    }
    position(positionX, positionY);
  }

  if (degree === -270 || degree === 90) {
    if (movingDirection === "up" && haveEnoughSpaceRight) {
      rotates["-270"].up.action();
    }
    if (movingDirection === "down" && haveEnoughSpaceLeft) {
      rotates["-270"].down.action();
    }
    if (movingDirection === "right" && haveEnoughSpaceDown) {
      rotates["-270"].right.action();
    }
    if (movingDirection === "left" && haveEnoughSpaceUp) {
      rotates["-270"].left.action();
    }
    position(positionX, positionY);
  }

  /*---------------------------------------------------------------------------------------------------------------------------*/

  /*--------------------------------------------------rotation vizualisation of the wings----------------------------------------------------*/

  let drone1WingRightAnimationDuration =
    document.querySelector("#drone1WingRight").style.animationDuration;
  let drone1WingLeftAnimationDuration =
    document.querySelector("#drone1WingLeft").style.animationDuration;
  let drone2WingRightAnimationDuration =
    document.querySelector("#drone2WingRight").style.animationDuration;
  let drone2WingLeftAnimationDuration =
    document.querySelector("#drone2WingLeft").style.animationDuration;

  let newDuration = "0.1s";
  let defaultDuration = "0.4s";

  if (directions.up) {
    drone1WingLeftAnimationDuration = newDuration;
    drone1WingRightAnimationDuration = newDuration;
  }
  if (directions.down) {
    drone2WingRightAnimationDuration = newDuration;
    drone2WingLeftAnimationDuration = newDuration;
  }
  if (directions.right) {
    drone1WingLeftAnimationDuration = newDuration;
    drone2WingLeftAnimationDuration = newDuration;
  }
  if (directions.left) {
    drone1WingRightAnimationDuration = newDuration;
    drone2WingRightAnimationDuration = newDuration;
  }

  document.addEventListener("keyup", function (event) {
    drone1WingRightAnimationDuration = defaultDuration;
    drone1WingLeftAnimationDuration = defaultDuration;
    drone2WingRightAnimationDuration = defaultDuration;
    drone2WingLeftAnimationDuration = defaultDuration;
  });

  /*----------------------------------------------------------------------------------------------------------------------------*/
});
