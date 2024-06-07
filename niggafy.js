const mainElement = document.querySelector(".main-container");
const niggafyButton = document.querySelector("#niggafy-action");

niggafyButton.addEventListener("click", (target) => {
  mainElement.style.backgroundColor = "black";
  niggafyButton.style.visibility = "hidden";
});
