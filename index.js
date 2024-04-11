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
  // //rotate the drone to the left
  // if (event.key === 'q') {
  //   dronesContainer.style.transform = 'rotate(90deg)';
  // }
  // //rotate the drone to the roght
  // if (event.key === 'e') {
  //   dronesContainer.style.transform = 'rotate(-90deg)';
  // }

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
  if (event.key === "ArrowLeft" || event.key === "a") {
    if (positionX - 60 > 0) {
      positionX -= step;
      dronesContainer.style.left = positionX + "px";
      dronesContainer.style.transform = "rotate(90deg)";
    }
  } else if (event.key === "ArrowUp" || event.key === "w") {
    if (positionY > 20) {
      positionY -= step;
      dronesContainer.style.top = positionY + "px";

      let startIndex = dronesContainer.style.transform.indexOf("(") + 1;
      let endIndex = dronesContainer.style.transform.indexOf("deg");
      let rotationDegreeString = dronesContainer.style.transform.slice(
        startIndex,
        endIndex
      );
      let rotationDegree = Number(rotationDegreeString);
      if (rotationDegree === -90) {
        dronesContainer.style.transform = "rotate(-180deg)";
        console.log(
          dronesContainer.style.transform + "dronesContainer.style.transform"
        );
      } else {
        dronesContainer.style.transform = "rotate(180deg)";
      }
    }
  } else if (event.key === "ArrowRight" || event.key === "d") {
    if (positionX + dronesContainer.offsetHeight + 50 < windowWidth) {
      positionX += step;
      dronesContainer.style.left = positionX + "px";
      let startIndex = dronesContainer.style.transform.indexOf("(") + 1;
      let endIndex = dronesContainer.style.transform.indexOf("deg");
      let rotationDegreeString = dronesContainer.style.transform.slice(
        startIndex,
        endIndex
      );
      let rotationDegree = Number(rotationDegreeString);
      if (rotationDegree === 180) {
        dronesContainer.style.transform = "rotate(270deg)";
      } else {
        dronesContainer.style.transform = "rotate(-90deg)";
      }
    }
  } else if (event.key === "ArrowDown" || event.key === "s") {
    if (positionY + dronesContainer.offsetHeight + 50 < windowHeight) {
      positionY += step;
      dronesContainer.style.top = positionY + "px";
      dronesContainer.style.transform = "rotate(0deg)";
    }
  }
});
