// http://www.omdbapi.com/?apikey=f4e55b10&

document.addEventListener('DOMContentLoaded', () => {
    const movieForm = document.getElementById('movie-form')
    const movieResult = document.getElementById('movie-result')

    movieForm.addEventListener('submit', (e) => {
        const movieName = document.getElementById('search-input').value
        // prevents Reloading
        e.preventDefault();
        fetchingMovieData(movieName);

        async function fetchingMovieData(movieName) {
            try {
                movieResult.innerHTML = `
                    <div>Searching for the Data....</div>
                `
                // actual data fetching
                const response = await fetch(`http://www.omdbapi.com/?apikey=f4e55b10&s=${movieName}`)
                const data = await response.json();
                console.log(data);
                if ((data.Response === "False")) {
                    throw new Error("Error occured");
                }
                displayData(data.Search);
            } catch (err) {
                // error message displays
                movieResult.innerHTML = `
                    <div>Error while fetching data..Try again</div>
                `
            }
        }
    })


    // function to display the data   
    function displayData(movies) {
        movieResult.innerHTML = `
    <div class="content-displaysHere">
        ${movies.map((movie) => {
            return `
                <div classname="content-boxes">
                <img 
                    src="${movie.Poster}"
                    alt="${movie.Title}"
                    class="movie-poster"
                />
                <div class="movie-Title">${movie.Title}</div>
                <div class="movie-year">${movie.Year}</div>

                </div>
            `
        }).join('')}
    </div>
    `
    }


})
