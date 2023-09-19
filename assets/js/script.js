const movieInputEl = $('#movie-title');
const movieFormEl = $('#movie-form');
const displayMovieInfo = $('#display-movie-info');

async function getMovieInfo(title) {
  try {
    const APIkey = `98d87208`;
    if (!title) {
      return alert('Enter a Movie Title');
    }

    const url = `https://www.omdbapi.com/?apikey=${APIkey}&t=${title}`;
    const getData = await $.ajax({
      url: url,
      method: 'GET',
    });
    displayMovieInfo.empty();
    printMovieInfo(getData);
  } catch (error) {
    console.log(error);
  }
}

function printMovieInfo(data) {
  const { Title, Rated, Released, Runtime, Genre, Poster } = data;
  // console.log(Title, Rated, Released, Runtime, Genre, Poster);
  const movieInfo =
    `<h3 class="text-center text-3xl">${Title}</h3>
          <img class="h-96" src=${Poster}  />
          <div class=" flex items-start flex-col">
          <p> <span class="font-semibold">Released Date:</span>  ${Released}</p>
           <p><span class="font-semibold">Rated:</span> ${Rated}</p>
            <p><span class="font-semibold">Runtime:</span> ${Runtime}</p>
             <p><span class="font-semibold">Genre:</span> ${Genre}</p>
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
