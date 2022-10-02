const s1 = document.querySelector("#ang1");
const s2 = document.querySelector("#ang2");
const s3 = document.querySelector("#ang3");
const aot_submit = document.querySelector("#submit");
const aot_reset = document.querySelector("#reset");
const msg = document.querySelector("#output");

const showMsg = (text, color, sound_selector) => {
  const policeWhistleSE = document.querySelector("#policewhistle");
  const failSE = document.querySelector("#fail-sound-effect");
  const successSE = document.querySelector("#success-sound-effect");
  const resetSE = document.querySelector("#reset-sound-effect");

  switch (sound_selector) {
    case "success":
      successSE.play();
      msg.style.display = "inline";
      msg.style.color = color;
      msg.innerText = text;
      break;

    case "fail":
      failSE.play();
      msg.style.display = "inline";
      msg.style.color = color;
      msg.innerText = text;
      break;

    case "info":
      policeWhistleSE.play();
      msg.style.display = "inline";
      msg.style.color = color;
      msg.innerText = text;
      break;

    case "reset":
      resetSE.play();
      msg.style.display = "none";
      s1.value = s2.value = s3.value = "";
      break;

    default:
      console.log("no sound");
      break;
  }
};

aot_submit.addEventListener("click", () => {
  side1 = Number(s1.value);
  side2 = Number(s2.value);
  side3 = Number(s3.value);

  const areaOfTriangle = (s1, s2, s3) => {};

  if (side1 && side2 && side3) {
    if (
      side1 + side2 > side3 &&
      side2 + side3 > side1 &&
      side1 + side3 > side2
    ) {
      console.log("side 1: " + side1 + "side 2: " + side2 + "side 3: " + side3);
      areaOfTriangle(side1, side2, side3);
    } else {
      message = "The input given is not a triangle";
      color = "red";
      ss = "fail";
      showMsg(message, color, ss);
    }
  } else {
    message = "Please enter all the angle to check the triangle";
    color = "darkblue";
    ss = "info";
    showMsg(message, color, ss);
  }
});

aot_reset.addEventListener("click", () => {
  showMsg(0, 0, "reset");
});
