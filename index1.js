let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let dronesContainer = document.getElementById("dronesContainer");
let positionX = 0;
let positionY = 20;
let bigger = false;
let smaller = false;
let rotationDegree = 0;
let scaled = false;

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

document.addEventListener("keydown", function (event) {
  const step = 7;

  /*-------------------------------making bigger and smaller to make the drone going up and landing-------------------------*/

  if (event.key === " " || event.key === "+") {
    if (smaller) {
      dronesContainer.style.transform = "scale(1)";
      smaller = false;
    } else {
      dronesContainer.style.transform = "scale(1.2)";
      bigger = true;
      scaled = true;
    }
  } else if (event.key === "Control" || event.key === "-") {
    if (bigger) {
      dronesContainer.style.transform = "scale(1)";
      bigger = false;
    } else {
      dronesContainer.style.transform = "scale(0.4)";
      smaller = true;
      scaled = true;
    }
  }
  /*---------------------------------------------------------------------------------------------------------------------------*/

  /*-------------------------------------------rotating the drone--------------------------------------------------------------*/

  // rotate the drone to the left

  if (event.key === "q") {
    let rotationDegree = 0;
    findRotation();
    // let startIndex = dronesContainer.style.transform.indexOf("(") + 1;
    // let endIndex = dronesContainer.style.transform.indexOf("deg");
    // let rotationDegreeString = dronesContainer.style.transform.slice(
    //   startIndex,
    //   endIndex
    // );
    // rotationDegree = Number(rotationDegreeString);

    /*-----------------------------------------finding out if the drone is scaled or not, to make it moved with scaled transformation-------*/

    const startIndexOfScaleValue =
      dronesContainer.style.transform.indexOf("scale(");

    const endIndexOfScaleValue = dronesContainer.style.transform.indexOf(")");

    const scaledSizeString = dronesContainer.style.transform.slice(
      startIndexOfScaleValue + "scale(".length,
      endIndexOfScaleValue
    );

    // console.log("Scaled size string:", scaledSizeString);

    /*-------------------------------------------------------------------------------------------------------------------------------------*/

    function findRotation() {
      rotationDegree = Math.abs(rotationDegree) + 90;

      return -rotationDegree;
    }
    console.log(findRotation());
    findRotation();
    dronesContainer.style.transform = `rotate(${findRotation()})`;
    dronesContainer.style.transform;
    console.log(
      dronesContainer.style.transform + " dronesContainer.style.transform "
    );
    // if (rotationDegree === 0) {
    //   dronesContainer.style.transform = "rotate(-90deg)";

    //   rotationDegree = -90;
    // } else if (rotationDegree === -90) {
    //   dronesContainer.style.transform = "rotate(-180deg)";

    //   rotationDegree = -180;
    // } else if (rotationDegree === -180) {
    //   dronesContainer.style.transform = "rotate(-270deg)";

    //   rotationDegree = -270;
    // } else if (rotationDegree === -270) {
    //   dronesContainer.style.transform = "rotate(-360deg)";

    //   rotationDegree = -360;
    // } else if (rotationDegree === -360) {
    //   rotationDegree = 0;
    //   console.log(rotationDegree);
    //   dronesContainer.style.transform = "rotate(-450deg)";
    // }
  }

  //   if (rotationDegree === 0) {
  //     dronesContainer.style.transform = scaled
  //       ? `rotate(-90deg) scale(${scaledSizeString}) `
  //       : "rotate(-90deg)";

  //     rotationDegree = -90;
  //   } else if (rotationDegree === -90) {
  //     dronesContainer.style.transform = scaled
  //       ? `rotate(-180deg) scale(${scaledSizeString})`
  //       : "rotate(-180deg)";

  //     rotationDegree = -180;
  //   } else if (rotationDegree === -180) {
  //     dronesContainer.style.transform = scaled
  //       ? `rotate(-270deg) scale(${scaledSizeString})`
  //       : "rotate(-270deg)";

  //     rotationDegree = -270;
  //   } else if (rotationDegree === -270) {
  //     dronesContainer.style.transform = scaled
  //       ? `rotate(-360deg) scale(${scaledSizeString})`
  //       : "rotate(-360deg)";

  //     rotationDegree = -360;
  //   } else if (rotationDegree === -360) {
  //     rotationDegree = 0;
  //   }
  // }

  //rotate the drone to the right
  if (event.key === "e") {
    let startIndex = dronesContainer.style.transform.indexOf("(") + 1;
    let endIndex = dronesContainer.style.transform.indexOf("deg");
    let rotationDegreeString = dronesContainer.style.transform.slice(
      startIndex,
      endIndex
    );
    rotationDegree = Number(rotationDegreeString);

    if (rotationDegree === 0) {
      dronesContainer.style.transform = "rotate(90deg)";
      rotationDegree = 90;
    } else if (rotationDegree === 90) {
      dronesContainer.style.transform = "rotate(180deg)";
      rotationDegree = 180;
    } else if (rotationDegree === 180) {
      dronesContainer.style.transform = "rotate(270deg)";
      rotationDegree = 270;
    } else if (rotationDegree === 270) {
      dronesContainer.style.transform = "rotate(360deg)";
      rotationDegree = 360;
    } else if (rotationDegree === 360) {
      rotationDegree = 0;
    }
  }
  /*-------------------------------------------------------------------------------------------------------------------------*/

  /*--------------------------------------------------Arrow keys---------------------------------------------------------------*/

  if (
    rotationDegree === 0 ||
    rotationDegree === -360 ||
    rotationDegree === 360
  ) {
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

  if (rotationDegree === -90 || rotationDegree === 270) {
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
  if (rotationDegree === -180 || rotationDegree === 180) {
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
  if (rotationDegree === -270 || rotationDegree === 90) {
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
  if (event.key === "ArrowUp") {
    drone1WingLeft.style.animationDuration = newDuration;
    drone1WingRight.style.animationDuration = newDuration;
  }
  //front wings are getting faster
  else if (event.key === "ArrowDown") {
    drone2WingRight.style.animationDuration = newDuration;
    drone2WingLeft.style.animationDuration = newDuration;
  }
  //left wings are getting faster
  else if (event.key === "ArrowRight") {
    drone1WingLeft.style.animationDuration = newDuration;
    drone2WingLeft.style.animationDuration = newDuration;
  }
  //right wings are getting faster
  else if (event.key === "ArrowLeft") {
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
