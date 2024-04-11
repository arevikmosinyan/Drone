let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let dronesContainer = document.getElementById("dronesContainer");
let positionX = 0;
let positionY = 0;
const step = 10;

let bigger = false;
let smaller = false;

document.addEventListener("keydown", function (event) {
  const step = 10;

  /*-------------------------------making bigger and smaller to make the drone going up and landing-------------------------*/

  if (event.key === " " || event.key === "+") {
    if (smaller) {
      dronesContainer.style.transform = "scale(1)";
      smaller = false;
    } else {
      dronesContainer.style.transform = "scale(1.2)";
      bigger = true;
    }
  } else if (event.key === "Control" || event.key === "-") {
    if (bigger) {
      dronesContainer.style.transform = "scale(1)";
      bigger = false;
    } else {
      dronesContainer.style.transform = "scale(0.4)";
      smaller = true;
    }
  }
  /*---------------------------------------------------------------------------------------------------------------------------*/

  /*-------------------------------------------rotating the drone--------------------------------------------------------------*/

  // rotate the drone to the left

  if (event.key === "q") {
    let startIndex = dronesContainer.style.transform.indexOf("(") + 1;
    let endIndex = dronesContainer.style.transform.indexOf("deg");
    let rotationDegreeString = dronesContainer.style.transform.slice(
      startIndex,
      endIndex
    );
    let rotationDegree = Number(rotationDegreeString);

    if (rotationDegree === 0) {
      dronesContainer.style.transform = "rotate(-90deg)";
    } else if (rotationDegree === -90) {
      dronesContainer.style.transform = "rotate(-180deg)";
    } else if (rotationDegree === -180) {
      dronesContainer.style.transform = "rotate(-270deg)";
    } else if (rotationDegree === -270) {
      dronesContainer.style.transform = "rotate(-360deg)";
    } else if (rotationDegree === -360) {
      rotationDegree = 0;
    }
  }

  //rotate the drone to the right
  if (event.key === "e") {
    let startIndex = dronesContainer.style.transform.indexOf("(") + 1;
    let endIndex = dronesContainer.style.transform.indexOf("deg");
    let rotationDegreeString = dronesContainer.style.transform.slice(
      startIndex,
      endIndex
    );
    let rotationDegree = Number(rotationDegreeString);

    if (rotationDegree === 0) {
      dronesContainer.style.transform = "rotate(90deg)";
    } else if (rotationDegree === 90) {
      dronesContainer.style.transform = "rotate(180deg)";
    } else if (rotationDegree === 180) {
      dronesContainer.style.transform = "rotate(270deg)";
    } else if (rotationDegree === 270) {
      dronesContainer.style.transform = "rotate(360deg)";
    }
  }
  /*-------------------------------------------------------------------------------------------------------------------------*/

  /*--------------------------------------------------Arrow keys---------------------------------------------------------------*/
  if (event.key === "ArrowLeft" || event.key === "a") {
    if (positionX - 60 > 0) {
      positionX -= step;
      dronesContainer.style.left = positionX + "px";
    }
  } else if (event.key === "ArrowUp" || event.key === "w") {
    if (positionY > 20) {
      positionY -= step;
      dronesContainer.style.top = positionY + "px";
    }
  } else if (event.key === "ArrowRight" || event.key === "d") {
    if (positionX + dronesContainer.offsetHeight + 50 < windowWidth) {
      positionX += step;
      dronesContainer.style.left = positionX + "px";
    }
  } else if (event.key === "ArrowDown" || event.key === "s") {
    if (positionY + dronesContainer.offsetHeight + 50 < windowHeight) {
      positionY += step;
      dronesContainer.style.top = positionY + "px";
    }
  }
  /*---------------------------------------------------------------------------------------------------------------------------*/
});

/*
  if (event.key === "q") {
   
    let startIndex = dronesContainer.style.transform.indexOf("(") + 1;
    let endIndex = dronesContainer.style.transform.indexOf("deg");
    let rotationDegreeString = dronesContainer.style.transform.slice(
      startIndex,
      endIndex
    );
    let rotationDegree = Number(rotationDegreeString);

   

    if (rotationDegree <= 0) {
      rotationDegree -= 90;
      dronesContainer.style.transform = "rotate(" + rotationDegree + "deg)";
    } else {
      dronesContainer.style.transform = "rotate(-360deg)";
    }
  }

  //rotate the drone to the right
  if (event.key === "e") {
    let startIndex = dronesContainer.style.transform.indexOf("(") + 1;
    let endIndex = dronesContainer.style.transform.indexOf("deg");
    let rotationDegreeString = dronesContainer.style.transform.slice(
      startIndex,
      endIndex
    );
    let rotationDegree = Number(rotationDegreeString);

    if (rotationDegree >= 0) {
      rotationDegree += 90;
      dronesContainer.style.transform = "rotate(" + rotationDegree + "deg)";
    } else {
      dronesContainer.style.transform = "rotate(360deg)";
    }
  }
  */
