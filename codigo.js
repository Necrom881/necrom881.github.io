function hideAll() {
    document.querySelectorAll(".movie").forEach((movie) => {
        movie.style.display = "None";
    });
}

document.querySelector("#animationbutton").addEventListener("click", () => {
    hideAll();
    document.querySelectorAll(".animation").forEach((ficha) => {
        ficha.style.display = "grid";
    });
});

document.querySelector("#terrorbutton").addEventListener("click", () => {
    hideAll();
    document.querySelectorAll(".terror").forEach((ficha) => {
        ficha.style.display = "grid";
    });
});

document.querySelector("#comedybutton").addEventListener("click", () => {
    hideAll();
    document.querySelectorAll(".comedy").forEach((ficha) => {
        ficha.style.display = "grid";
    });
});

document.querySelector("#allbutton").addEventListener("click", () => {
    document.querySelectorAll(".movie").forEach((ficha) => {
        ficha.style.display = "grid";
    });
});

document.querySelector("#list").addEventListener("change", () => {
    let movieGenre = document.querySelector("#list").value;
    hideAll();
    document.querySelectorAll("."+movieGenre).forEach((ficha) => {
        ficha.style.display = "grid"
    });
});