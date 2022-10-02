const showMsg = (score) => {
  const infoSE = document.querySelector("#infosound");
  msg.style.display = "inline";
  msg.innerText = "The Score is " + score;
  infoSE.play();
};
const submit = document.querySelector("#submit");
const quizForm = document.querySelector(".quizForm");
const msg = document.querySelector("#output");

const quizAns = [
  "A geometric figure",
  "180°",
  "3",
  "3",
  "Equilateral",
  "Hypotenuse",
  "Scalene",
  "Isosceles",
];

submit.addEventListener("click", () => {
  const formResult = new FormData(quizForm);
  let score = 0,
    i = 0;
  for (let value of formResult.values()) {
    if (value === quizAns[i]) {
      score++;
    }
    i++;
  }
  showMsg(score);
});
