<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QuizApp</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <link rel="stylesheet" href="css/style.css" />

  </head>
  <body>

    <!-- start here -->
    <div class="container">
      <div class="row">

        <div class="quiz-app col">
          <h1 class="display-4">General Information Quiz</h1>
          <hr>
          <div class="quiz-info ">

            <div class="section form-group row">
              <label for="cat" class="cat col-sm-2 col-form-label">Category:</label>
              <div class="col-sm-10">
                <select id="cat" class="cat-select select form-control" name="category-select" ></select>
              </div>
            </div>

            <div class="section form-group row">
              <label for="num" class="cat col-sm-2 col-form-label">#Questions:</label>
              <div class="col-sm-10">
                <input id="num" type="number" min="5" max="25" step="5" value="5" required class="cat-select select form-control" />
              </div>
            </div>

            <div class="section form-group row">
              <label for="diff" class="cat col-sm-2 col-form-label">Difficulty:</label>
              <div class="col-sm-10">
                <select id="diff" class="select  form-control" name="number-select">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>

            <button class="submit-info btn btn-primary btn-block">Start Quiz</button>
          </div>

          <div class="quiz-space hidden">
            <div class="quiz-about d-flex justify-content-between">
              <div class="selected-cat"></div>
              <div class="selected-num">
                <span class="cur"></span>/<span class="all"></span>
              </div>
              <div class="selected-diff"></div>
            </div>
            <div class="whole-questions"></div>
            <div class="control-btns row px-3">
              <button class="next-button col-sm-8 ">Next</button>
              <button class="finish-button offset-sm-1 col-sm-3 ">Finish</button>
            </div>

            <div class="result hidden">
              <div class="row  px-3">
                <div class="col-md-4 mb-2">
                  <div class="correct-res">Correct Answers: <span></span></div>
                  <div class="wrong-res">Wrong Answers: <span></span></div>
                </div>
                <div class="total-res  col-md-8 ">Quiz Result: <span></span>
                </div>
              </div>
            </div>
            <div class="assets-countainer">
              <div class="bullets"></div>
              <div class="count-down"></div>
            </div>
            <div class="correct-answers hidden">
              <h3 class="mt-3">Check Correct Answers</h3>
              <hr>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- end here -->

    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    <script src="js/script.js"></script>

  </body>
</html>
