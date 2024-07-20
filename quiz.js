function checkAnswer() {
    const correctAnswer = 4;
    const checkedRadioBtn = document.querySelector("input[name='quiz']:checked");
    const userAnswer = Number(checkedRadioBtn.value);

    const feedBack = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedBack.textContent = "Correct! Well done.";
    } else {
        feedBack.textContent = "That's incorrect. Try again!";
    }

}

const submitAnswerBtn = document.getElementById("submit-answer");
submitAnswerBtn.addEventListener("click", checkAnswer);
