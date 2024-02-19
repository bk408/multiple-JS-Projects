let mouseX = 0;
let mouseY = 0;

let flashlight = document.getElementById("flashlight");

const isDeviceTouchable = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  mouseX = !isDeviceTouchable() ? e.pageX : e.touches[0].pageX;
  mouseY = !isDeviceTouchable() ? e.pageY : e.touches[0].pageY;

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);
