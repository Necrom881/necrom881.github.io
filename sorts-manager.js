document.querySelector("#azSort").addEventListener("click", ()=>{
    clearCards()
    const sortAZ = cinemas.sort((m1,m2)=>{
        if (m1.Title<m2.Title) return -1;
        if (m1.Title>m2.Title) return 1;
        return 0
    });
    sortAZ.forEach(movie=>{
        generateCard(movie);
    });
    console.log("works")
});

document.querySelector("#zaSort").addEventListener("click", ()=>{
    clearCards()
    const sortZA = cinemas.sort((m1,m2)=>{
        if (m1.Title>m2.Title) return -1;
        if (m1.Title<m2.Title) return 1;
        return 0
    })
    sortZA.forEach(movie=>{
        generateCard(movie);
    });
    console.log("works")
});

document.querySelector("#Sort").onclick = (event)=>{
    clearCards();
    const asc = document.querySelector("#r-asc").checked;
    const desc = document.querySelector("#r-desc").checked;
    //Sort in function of Runtime
    filteredMovies.sort((m1,m2)=>{
        if (asc===true) {
            return parseInt(m1.Runtime)-parseInt(m2.Runtime);
        } else if (desc===true) {
            return parseInt(m2.Runtime)-parseInt(m1.Runtime);
        }
    });
    filteredMovies.map(generateCard);
};