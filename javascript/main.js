// Is Triangle Section (START)
const ang1 = document.querySelector("#ang1");
const ang2 = document.querySelector("#ang2");
const ang3 = document.querySelector("#ang3");
const is_triangle_submit = document.querySelector("#submit");
const is_triangle_reset = document.querySelector("#reset");
const msg = document.querySelector("#output");

const showMsg = (text, color, sound_selector) => {
  const infoSE = document.querySelector("#infoSE");
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
      infoSE.play();
      msg.style.display = "inline";
      msg.style.color = color;
      msg.innerText = text;
      break;

    case "reset":
      resetSE.play();
      msg.style.display = "none";
      ang1.value = ang2.value = ang3.value = "";
      break;

    default:
      console.log("no sound");
      break;
  }
};

is_triangle_submit.addEventListener("click", () => {
  angle1 = Number(ang1.value);
  angle2 = Number(ang2.value);
  angle3 = Number(ang3.value);

  const isTriangle = (a1, a2, a3) => {
    angle_of_triangle = a1 + a2 + a3;
    console.log(angle_of_triangle);

    if (angle_of_triangle === 180) {
      message = "This is a triangle";
      color = "green";
      ss = "success";
      showMsg(message, color, ss);
    } else {
      message = "This is not a triangle";
      color = "red";
      ss = "fail";
      showMsg(message, color, ss);
    }
  };

  if (angle1 && angle2 && angle3) {
    console.log(
      "angle 1: " + angle1 + " angle 2: " + angle2 + " angle 3: " + angle3
    );
    isTriangle(angle1, angle2, angle3);
  } else {
    message = "Please enter all the angle to check the triangle";
    color = "darkblue";
    ss = "info";
    showMsg(message, color, ss);
  }
});

is_triangle_reset.addEventListener("click", () => {
  showMsg(0, 0, "reset");
});
// Is Triangle Section (END)
