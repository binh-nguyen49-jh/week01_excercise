document.addEventListener("DOMContentLoaded", () => {
    const brightassSection = document.getElementById("brightass");
    const brightassContainer = document.querySelector("#brightass .container");

    const wordsSection = document.getElementById("words");
    const wordsImage = document.querySelector("#words .section__img img");
    const wordsContainer = document.querySelector("#words .container");

    const endSection = document.getElementById("end");
    const endContainer = document.querySelector("#end .container");

    const resizeHeightBrightass = () => {
        if (window.innerWidth > 1599) {
            brightassSection.style.height =
                `${0.5 * brightassContainer.getBoundingClientRect().height}px`;
        } else {
            brightassSection.style.height =
                `${brightassContainer.getBoundingClientRect().height}px`;
        }
    }
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

    const resizeHeightEnd = () => {
        if (window.innerWidth > 1599) {
            endSection.style.height =
                `${0.5 * endContainer.getBoundingClientRect().height + 120}px`;
        } else {
            endSection.style.height =
                `${endContainer.getBoundingClientRect().height}px`;
        }
    }
    resizeHeightBrightass();
    resizeHeightWords();
    resizeHeightEnd();

    window.onresize = () => {
        resizeHeightBrightass();
        resizeHeightWords();
        resizeHeightEnd();
    }
})