const aboutBtn = document.querySelector(".about-submit");

aboutBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("aboutBtn");
  createCard();
});

function createCard() {
  const data = getInputValues();
  return fetch(`http://localhost:8080/about`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function getInputValues() {
  const form = document.querySelector('form')
  const inputList = form.querySelectorAll('input')

  const inputValues = {};
  inputList.forEach((input) => {
    inputValues[input.name] = input.value;
  });
  return inputValues;
}
