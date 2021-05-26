const aboutBtn = document.querySelector(".about-submit");

aboutBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("aboutBtn");
  createCard();
});

function createCard() {
  return fetch(`http://localhost:8080/about`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Sergey",
      link: "Kirin",
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
