document.querySelector("#s-title").addEventListener("click",()=>{
    clearCards();
    const searchText = document.querySelector("#searchByTitle").value;
    const filteredMovies = cinemas.filter(movie =>
        movie.Title.toUpperCase().includes(searchText.trim().toUpperCase()));
    filteredMovies.forEach(movie => {
        generateCard(movie);
    });
    console.log("works");
});

document.querySelector("#s-Actor").addEventListener("click",()=>{
    clearCards();
    const searchText = document.querySelector("#searchByActor").value;
    const filteredMovies = cinemas.filter(movie =>
        movie.Actors.toUpperCase().includes(searchText.trim().toUpperCase()));
    filteredMovies.forEach(movie => {
        generateCard(movie);
    });
    console.log("works");
});

document.querySelector("#genreSelector").addEventListener("change",()=>{
    clearCards();
    const searchText = document.querySelector("#genreSelector").value;
    const filteredMovies = cinemas.filter(movie =>
        movie.Genre.toUpperCase().includes(searchText.toUpperCase()));
    filteredMovies.forEach(movie => {
        generateCard(movie);
    });
    console.log("works");
});

document.querySelector("#countrySelector").addEventListener("change",()=>{
    clearCards();
    const searchText = document.querySelector("#countrySelector").value;
    const filteredMovies = cinemas.filter(movie =>
        movie.Country.toUpperCase().includes(searchText.toUpperCase()));
    filteredMovies.forEach(movie => {
        generateCard(movie);
    });
    console.log("works");
});

document.querySelector("#yearAscending").addEventListener("click", ()=>{
    clearCards()
    const sortAscending = cinemas.sort((m1,m2)=>{
        return parseInt(m1.Year)-parseInt(m2.Year)
    });
    sortAscending.forEach(movie=>{
        generateCard(movie);
    });
    console.log("works")
});

document.querySelector("#yearDescending").addEventListener("click", ()=>{
    clearCards()
    const sortDescending = cinemas.sort((m1,m2)=>{
        return parseInt(m1.Year)-parseInt(m2.Year)
    }).reverse();
    sortDescending.forEach(movie=>{
        generateCard(movie);
    });
    console.log("works")
});


function movieFilters(idSearchElement, attributeSearchName) {
    clearCards();
    const searchText = document.querySelector(idSearchElement).value;
    const filteredMovies = cinemas.filter(movie =>
        movie[attributeSearchName].toUpperCase().includes(searchText.trim().toUpperCase()));
    movieFilters.map(generateCard);
    console.log("works");
};