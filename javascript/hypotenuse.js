const base = document.querySelector("#base");
const height = document.querySelector("#height");
const hypotenuse_submit = document.querySelector("#submit");
const hypotenuse_reset = document.querySelector("#reset");
const msg = document.querySelector("#output");

const showMsg = (text, sound_selector) => {
  const infoSE = document.querySelector("#infoSE");
  const failSE = document.querySelector("#fail-sound-effect");
  const successSE = document.querySelector("#success-sound-effect");
  const resetSE = document.querySelector("#reset-sound-effect");

  switch (sound_selector) {
    case "success":
      successSE.play();
      msg.style.display = "inline";
      msg.style.color = "green";
      msg.innerText = text;
      break;

    case "fail":
      failSE.play();
      msg.style.display = "inline";
      msg.style.color = "red";
      msg.innerText = text;
      break;

    case "info":
      infoSE.play();
      msg.style.display = "inline";
      msg.style.color = "darkblue";
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

const hypotenuseCalc = (b, h) => {
  const hypotenuse = Math.sqrt(Math.pow(b, 2) + Math.pow(h, 2)).toFixed(3);
  console.log("Hypotenuse: " + hypotenuse);
  return hypotenuse;
};

hypotenuse_submit.addEventListener("click", () => {
  let leg_a = Number(base.value);
  let leg_b = Number(height.value);
  if (leg_a && leg_b) {
    text = "Base: " + leg_a + "\nHeight: " + leg_b;
    console.log(text);
    const ans = hypotenuseCalc(leg_a, leg_b);
    text = "Hypotenuse of Triangle " + ans;
    showMsg(text, "success");
  } else {
    showMsg("Please enter both values.", "info");
  }
});

hypotenuse_reset.addEventListener("click", () => {
  showMsg("", "reset");
});
