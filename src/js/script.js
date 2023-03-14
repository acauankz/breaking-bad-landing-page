const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");

carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    disableSelectedButton();

    selectCarouselButton(button);

    hideActiveImage();

    showBackgroundImage(index);
  });
});

function showBackgroundImage(index) {
  images[index].classList.add("active");
}

function selectCarouselButton(button) {
  button.classList.add("selected");
}

function hideActiveImage() {
  const activeImage = document.querySelector(".active");
  activeImage.classList.remove("active");
}

function disableSelectedButton() {
  const selectedButton = document.querySelector(".selected");
  selectedButton.classList.remove("selected");
}
