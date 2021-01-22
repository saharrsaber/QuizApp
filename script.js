"use strict";

const catSelect = document.querySelector("#cat");
const btnInfo = document.querySelector(".submit-info");
const numInput = document.querySelector("#num");
const diffSelect = document.querySelector("#diff");
const quizInfo = document.querySelector(".quiz-info");
const quizSpace = document.querySelector(".quiz-space");
const wholeQuestions = document.querySelector(".whole-questions");
const catDiv = document.querySelector(".selected-cat");
const numDiv = document.querySelector(".selected-num");
const diffDiv = document.querySelector(".selected-diff");
const bullets = document.querySelector(".bullets");
const controlBtns = document.querySelector(".control-btns");
const nextBtn = document.querySelector(".next-button");
const finishBtn = document.querySelector(".finish-button");
const correctRes = document.querySelector(".correct-res");
const wrongRes = document.querySelector(".wrong-res");
const totalRes = document.querySelector(".total-res");
const resultContainer = document.querySelector(".result");
const countDownElement = document.querySelector(".count-down");
const duration = 3;
let catId,
  totalNum,
  diffLevel,
  catName,
  curQuestion = 0,
  curScore = 0,
  correctAnswers = [],
  checked,
  countDownInterval;

function countDownFn(duration, index) {
  if (index < totalNum) {
    clearInterval(countDownInterval);
    let minutes, seconds;
    countDownInterval = setInterval(function () {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);
      countDownElement.textContent = `${minutes}:${seconds}`;

      if (--duration < 0) {
        clearInterval(countDownInterval);
        if (index < totalNum - 2) nextBtn.click();
        else finishBtn.click();
      }
    }, 1000);
  }
}

function compareResult() {
  checked = document.querySelector(
    `input[name="answers_${curQuestion}"]:checked`
  ).value;
  console.log(curScore);
  console.log(curQuestion + "answered as " + checked);
  //compare correct or not
  console.log("correct :" + correctAnswers[curQuestion]);
  console.log("checked :" + checked);
  if (correctAnswers[curQuestion] === checked) {
    curScore++;
    bullets.children[curQuestion].classList.add("good");
  } else bullets.children[curQuestion].classList.add("bad");

  //color bad/good bullet
  bullets.children[curQuestion].classList.remove("on");
  wholeQuestions.children[curQuestion].classList.add("hidden");
  if (curQuestion != totalNum - 1) countDownFn(duration, curQuestion);
}

//category list API
const listCategories = fetch("https://opentdb.com/api_category.php")
  .then((response) => response.json())
  .then((data) => {
    data.trivia_categories.forEach((cat) => {
      catSelect.insertAdjacentHTML(
        "beforeend",
        `<option value="${cat.id}">${cat.name}</option>`
      );
    });
  });

//start quiz btn
btnInfo.addEventListener("click", function () {
  //retrive quiz info
  catId = catSelect.value;
  catName = catSelect.options[catSelect.selectedIndex].text;
  totalNum = numInput.value;
  diffLevel = diffSelect.value;
  catDiv.firstElementChild.textContent = String(catName);
  numDiv.firstElementChild.textContent = String(totalNum);
  diffDiv.firstElementChild.textContent = String(diffLevel);
  //log for testing
  console.log([catId, totalNum, diffLevel]);
  // hidden class
  quizInfo.classList.add("hidden");
  quizSpace.classList.remove("hidden");

  //AJAX request
  const request = fetch(
    `https://opentdb.com/api.php?amount=${totalNum}&category=${catId}&difficulty=${diffLevel}&type=multiple`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("here");
      data.results.forEach((res, i) => {
        wholeQuestions.insertAdjacentHTML(
          "beforeend",
          `<div class="question_${i} hidden">
        <div class="quiz-area">
          <h2>Question ${i + 1}:${res.question}</h2>
        </div>

        <div class="answers-area ">
          <div class="answer">
            <input type="radio" id="q${i}_1" name="answers_${i}" value ="${
            res.incorrect_answers[0]
          }"  checked />
            <label for="q${i}_1">${res.incorrect_answers[0]}</label>
          </div>
          <div class="answer">
            <input type="radio" id="q${i}_2" name="answers_${i}" value ="${
            res.incorrect_answers[1]
          }" />
            <label for="q${i}_2">${res.incorrect_answers[1]}</label>
          </div>
          <div class="answer">
            <input type="radio" id="q${i}_3" name="answers_${i}"value ="${
            res.incorrect_answers[2]
          }"  />
            <label for="q${i}_3">${res.incorrect_answers[2]}</label>
          </div>
          <div class="answer">
            <input type="radio" id="q${i}_4" name="answers_${i}" value ="${
            res.correct_answer
          }" />
            <label for="q${i}_4">${res.correct_answer}</label>
          </div>
        </div>
      </div>`
        );
        correctAnswers[i] = res.correct_answer;
        bullets.insertAdjacentHTML("beforeend", "<span></span>");
      });
      wholeQuestions.children[curQuestion].classList.remove("hidden");
      bullets.children[curQuestion].classList.add("on");
      countDownFn(duration, curQuestion);
    });
});

//  next  btn
nextBtn.addEventListener("click", function () {
  compareResult();
  // move to next question
  curQuestion++;
  wholeQuestions.children[curQuestion].classList.remove("hidden");
  bullets.children[curQuestion].classList.add("on");

  if (curQuestion == totalNum - 1) {
    nextBtn.classList.add("hidden");

    finishBtn.style.width = "100%";
  }
});

//  finish  btn
finishBtn.addEventListener("click", function () {
  compareResult();
  controlBtns.classList.add("hidden");
  correctRes.firstElementChild.textContent = curScore;
  wrongRes.firstElementChild.textContent = totalNum - curScore;
  totalRes.firstElementChild.textContent = curScore;
  resultContainer.classList.remove("hidden");
  countDownElement.classList.add("hidden");
});
