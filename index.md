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
          <label for="num">#Questions:</label>
          <input
            id="num"
            type="number"
            min="5"
            max="25"
            step="5"
            value="5"
            required
          />
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
          <div class="selected-cat"></div>
          <div class="selected-num">
            <span class="cur"></span>/<span class="all"></span>
          </div>
          <div class="selected-diff"></div>
        </div>
        <div class="whole-questions"></div>
        <div class="control-btns">
          <button class="finish-button">Finish</button>
          <button class="next-button">Next</button>
        </div>
        <div class="result hidden">
          <div class="total-res">Quiz Result: <span></span></div>
          <div class="correct-res">Correct Answers: <span></span></div>
          <div class="wrong-res">Wrong Answers: <span></span></div>
        </div>
        <div class="assets-countainer">
          <div class="bullets"></div>
          <div class="count-down"></div>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
