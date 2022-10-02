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

aot_reset.addEventListener("click", () => {
  showMsg(0, 0, "reset");
});
