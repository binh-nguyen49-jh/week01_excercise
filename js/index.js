document.addEventListener("DOMContentLoaded", () => {
  const wordsSection = document.getElementById("words");
  const wordsImage = document.querySelector("#words .section__img img");
  const wordsContainer = document.querySelector("#words .container");

  const resizeHeightWords = () => {
    const wordsContainerHeight = wordsContainer.getBoundingClientRect().height;
    const wordsImageHeight = wordsImage.getBoundingClientRect().height;
    if (window.innerWidth > 1599) {
      wordsSection.style.height =
        `${wordsContainerHeight - wordsImageHeight}px`;
      wordsContainer.style.transform = `translate(0, -${wordsImageHeight}px)`;
    } else {
      wordsSection.style.height =
        `${wordsContainerHeight}px`;
      wordsContainer.style.transform = "translate(0)";
    }
  }

  resizeHeightWords();

  window.onresize = () => {
    resizeHeightWords();
  }

  const header = document.querySelector("header");
  const logo = document.querySelector("h1");
  window.onscroll = () => {
    if (window.scrollY >= header.getBoundingClientRect().height) {
      header.classList.add("fixed");
      logo.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
      logo.classList.remove("fixed");
    }
  }
})