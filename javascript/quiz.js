const submit = document.querySelector("#submit");
const quizform = document.querySelector(".quizForm");
const msg = document.querySelector(".output");

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
  const formResult = new FormData(quizform);
  let score = 0,
    i = 0;
  for (let value of formResult.values()) {
    if (value === quizAns[i]) {
      score = score + 1;
    }
    i = i + 1;
  }
  msg.innerText = "Score: " + score;
});
