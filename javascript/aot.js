const s1 = document.querySelector("#s1");
const s2 = document.querySelector("#s2");
const s3 = document.querySelector("#s3");
const aot_submit = document.querySelector("#submit");
const aot_reset = document.querySelector("#reset");
const msg = document.querySelector("#output");

const showMsg = (text, color, sound_selector) => {
  const infoSE = document.querySelector("#infoSE");
  const failSE = document.querySelector("#fail-sound-effect");
  const successSE = document.querySelector("#success-sound-effect");
  const resetSE = document.querySelector("#reset-sound-effect");

  msg.style.display = "inline";
  msg.style.color = color;
  msg.innerText = text;

  switch (sound_selector) {
    case "success":
      successSE.play();
      break;

    case "fail":
      failSE.play();
      break;

    case "info":
      infoSE.play();
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

  const areaOfTriangle = (s1, s2, s3) => {
    semi_perimeter = (s1 + s2 + s3) / 2;

    return (aot = Math.sqrt(
      semi_perimeter *
        (semi_perimeter - s1) *
        (semi_perimeter - s2) *
        (semi_perimeter - s3)
    ).toFixed(4));
  };

  if (side1 && side2 && side3) {
    if (
      side1 + side2 > side3 &&
      side2 + side3 > side1 &&
      side1 + side3 > side2
    ) {
      console.log(
        "\nside 1: " + side1 + "\nside 2: " + side2 + "\nside 3: " + side3
      );
      const aot = areaOfTriangle(side1, side2, side3);
      message = "Area of triangle: " + aot;
      showMsg(message, "green", "success");
    } else {
      message = "This is not a triangle";
      showMsg(message, "red", "fail");
    }
  } else {
    message = "Please enter all the angle to check the triangle";
    showMsg(message, "darkblue", "info");
  }
});

aot_reset.addEventListener("click", () => {
  showMsg(0, 0, "reset");
});
