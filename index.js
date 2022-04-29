let submitResponse = document.getElementById(`submit-response`);
console.log(submitResponse);

document.getElementById(`submit`).addEventListener(`click`, function () {
  console.log(`Thanks for hitting submit`);
  submitResponse.innerHTML = `Thanks for hitting submit`;
});
