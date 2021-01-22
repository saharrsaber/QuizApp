<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QuizApp</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="quiz-app">
      <h1 class="heading">General Information Quiz</h1>
      <div class="quiz-info">
        <div class="section">
          <label for="cat">Category:</label>
          <select
            id="cat"
            class="cat-select select"
            name="category-select"
          ></select>
        </div>
        <div class="section">
          <label for="num">Total Number of Questions:</label>
          <input
            id="num"
            type="number"
            min="5"
            max="25"
            step="5"
            value="5"
            required
          />
          <!-- <select class="select" name="number-select">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select> -->
        </div>
        <div class="section">
          <label for="diff">Difficulty:</label>
          <select id="diff" class="select" name="number-select">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button class="submit-info">Start Quiz</button>
      </div>
      <div class="quiz-space hidden">
        <div class="quiz-about">
          <div class="selected-cat">Category: <span></span></div>
          <div class="selected-num">Questions Count: <span></span></div>
          <div class="selected-diff">Difficulty: <span></span></div>
        </div>
        <div class="whole-questions"></div>
        <div class="control-btns">
          <button class="finish-button">Finish</button>
          <button class="next-button">Next</button>
        </div>
        <div class="result hidden">
          <div class="correct-res">Correct Answers: <span></span></div>
          <div class="wrong-res">Wrong Answers: <span></span></div>
          <div class="total-res">Quiz Result: <span></span></div>
        </div>
        <div class="bullets"></div>
        <div class="count-down"></div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
