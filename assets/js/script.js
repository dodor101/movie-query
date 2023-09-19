const getMoveDetailsBtn = $('#get-movie-detains');
const movieInputEl = $('#movie-title');
const movieFormEl = $('#movie-form');
const displayMovieInfo = $('#display-movie-info');

async function getMovieInfo(title) {
  try {
    const APIkey = `98d87208`;

    const url = `http://www.omdbapi.com/?apikey=${APIkey}&t=${title}`;
    const getData = await $.ajax({
      url: url,
      method: 'GET',
    });
    displayMovieInfo.empty()
    printMovieInfo(getData);
  } catch (error) {
    console.log(error);
  }
}

function printMovieInfo(data) {
  console.log(data)
  const { Title, Rated, Released, Runtime, Genre, Poster } = data;
  // console.log(Title, Rated, Released, Runtime, Genre, Poster);
  const movieInfo = `
<h3 class="text-center text-3xl">${Title}</h3>
          <img class="h-96" src=${Poster}  />
          <div>
          <p>Released Date: ${Released}</p>
           <p>Rated: ${Rated}</p>
            <p>Runtime: ${Runtime}</p>
             <p>Genre: ${Genre}</p>
          </div>


`;
  displayMovieInfo.append(movieInfo);
}

movieFormEl.on('submit', async (e) => {
  e.preventDefault();
  const title = movieInputEl.val();
  await getMovieInfo(title);
  movieInputEl.val('');
});
