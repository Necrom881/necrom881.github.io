const URL= "https://necrom881.github.io/movies-250.json"

let cinemas; 

function generateCard(movie){
    //1. We are creating the card with this element. Similar to our design
    const newCard = document.createElement("div"); //It generates a new element called div
    newCard.setAttribute("class","containers");
    //2. Now, we add the pictures in the container
    const newImg = document.createElement("img");
    newImg.setAttribute("src", movie.Poster);
    newImg.setAttribute("alt", `Movie Poster of ${movie.Title}`);
    newCard.appendChild(newImg);
    //3. Next, the Card content
    const newContent = document.createElement("div");
    newContent.setAttribute("class","card-content");
    newCard.appendChild(newContent);
    //4. Now, fill the content. title first
    const NewTitle = document.createElement("h5");
    NewTitle.textContent = movie.Title;
    newCard.appendChild(NewTitle);
    //5. Next, the movie info
    const newDirector = document.createElement("p");
    const newBoldText = document.createElement("strong");
    newDirector.appendChild(newBoldText);
    newBoldText.textContent = "Director: ";
    newContent.appendChild(newDirector);
    const allDirectorInfo = document.createTextNode(movie.Director);
    newDirector.appendChild(allDirectorInfo);
    //6. We have to code the remaining information now. Year
    const newYear = document.createElement("p");
    const newBoldYear = document.createElement("strong");
    newYear.appendChild(newBoldYear);
    newBoldYear.textContent = "Year: ";
    newContent.appendChild(newYear);
    const allYearInfo = document.createTextNode(movie.Year);
    newYear.appendChild(allYearInfo);
    //7. Country...
    const newCountry = document.createElement("p");
    const newBoldCountry = document.createElement("strong");
    newCountry.appendChild(newBoldCountry);
    newBoldCountry.textContent = "Country: ";
    newContent.appendChild(newCountry);
    const allCountryInfo = document.createTextNode(movie.Country);
    newCountry.appendChild(allCountryInfo);
    //8. Duration...
    const newDuration = document.createElement("p");
    const newBoldDuration = document.createElement("strong");
    newDuration.appendChild(newBoldDuration);
    newBoldDuration.textContent = "Duration: ";
    newContent.appendChild(newDuration);
    const allDurationInfo = document.createTextNode(movie.Runtime);
    newDuration.appendChild(allDurationInfo);
    //9. Finally, Genre
    const newGenre = document.createElement("p");
    const newBoldGenre = document.createElement("strong");
    newGenre.appendChild(newBoldGenre);
    newBoldGenre.textContent = "Genre: ";
    newContent.appendChild(newGenre);
    const allGenreInfo = document.createTextNode(movie.Genre);
    newGenre.appendChild(allGenreInfo);
    document.querySelector("#allMoviesContainer").appendChild(newCard);//This last section adds all the editon done above in the html sentence
}


function processMovie (data) {
    cinemas = data.movies;
    /*
    DIFFERENT WAYS TO RUN OVER AN ARRAY TO GET INFORMATION
    //Below, we can find the traditional method to do a tour and get the information
    for (let i=0;i<cinemas.length;i++){
        //console.log("Duration: " + cinemas[i].Runtime)
    }
    
    //Using the for-of loop, we do another tour
    for (movie of cinemas) {
        //console.log("Director: " + movie.Director)
    }
    
    //Here we do a tour with the forEach method
    cinemas.forEach(movie => {
        console.log(movie.Title)
    });

    for(atribute in cinemas[0]){
        //console.log(atribute, cinemas[0][atribute]);
    
    }*/

    cinemas.forEach(element => {
        generateCard(element);
    });
}

function clearCards(){
    document.querySelectorAll(".containers").forEach(container=>container.remove());
}

doGetRequest(URL, processMovie);