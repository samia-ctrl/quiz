function alertAnswer(event) {
  let feedback = document.querySelector("#response-to-answer");
  feedback.innerHTML = "Correct ✅";
}
let leftButton = document.querySelector("#opt-1");
leftButton.addEventListener("click", alertAnswer);

function alertResponse(event) {
  let feedbackResponse = document.querySelector("#response-to-answer");
  feedbackResponse.innerHTML = "Incorrect ❌";
}
let rightButton = document.querySelector("#opt-2");
rightButton.addEventListener("click", alertResponse);
