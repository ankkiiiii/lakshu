const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");
const box = document.getElementById("box");
const loader = document.getElementById("loader");
const result = document.getElementById("result");

// QUESTIONS
const questions = [
  "Do you like me? 💖",
  "Do you enjoy talking to me? 😊",
  "Would you like to know me better? 🌙",
  "Can I make you smile sometimes? 😌✨"
];

// NO REACTIONS
const noTexts = [
  "Please 🥺",
  "Really? 😳",
  "Are you sure? 🥹",
  "Okay okay 😄"
];

let qIndex = 0;
let noIndex = 0;

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const area = document.querySelector(".buttons");

  const maxX = area.offsetWidth - noBtn.offsetWidth;
  const maxY = area.offsetHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

// NO click reaction
noBtn.addEventListener("click", () => {
  if (noIndex < noTexts.length) {
    question.innerHTML = noTexts[noIndex];
    noIndex++;
  }
});

// YES click → next question
yesBtn.addEventListener("click", () => {
  noIndex = 0;
  qIndex++;

  if (qIndex < questions.length) {
    question.innerHTML = questions[qIndex];
  } else {
    box.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
      loader.style.display = "none";
      result.style.display = "block";
    }, 2200);
  }
});
