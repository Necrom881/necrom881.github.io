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
    const searchText2 = document.querySelector("#searchByActor").value;
    const filteredMovies2 = cinemas.filter(movie =>
        movie.Actors.toUpperCase().includes(searchText2.trim().toUpperCase()));
    filteredMovies2.forEach(movie => {
        generateCard(movie);
    });
    console.log("works");
});
document.querySelector("#genreSelector").addEventListener("input",()=>{
    clearCards();
    const searchValue = document.querySelector("#genreSelector").value;
    const filteredMovies3 = cinemas.filter(movie =>
        movie.Genre.toUpperCase().includes(searchValue.toUpperCase()));
    filteredMovies3.forEach(movie => {
        generateCard(movie);
    });
    console.log("works");
});