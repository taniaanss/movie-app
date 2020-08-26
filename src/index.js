import "./style.css";

// api key
const api_key = "efe30b0ecdb4d3c785768d107702be4e";
const image_url = "https://image.tmdb.org/t/p/w500";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=efe30b0ecdb4d3c785768d107702be4e";

const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const movieSearch = document.querySelector("#movies-search");
const movieContainer = document.querySelector("#movies-container");

function generateUrl(path) {
  const url = `https://api.themoviedb.org/3${path}?api_key=efe30b0ecdb4d3c785768d107702be4e`;
  return url;
}

function requestMovies(url, onComplete, onError) {
  fetch(url)
    .then((res) => res.json())
    .then(onComplete)
    .catch(onError);
}

function movieSelection(movies) {
  const section = document.createElement("section");
  section.classList = "section";

  movies.map((movie) => {
    if (movie.poster_path) {
      const img = document.createElement("img");
      img.src = image_url + movie.poster_path;
      img.setAttribute("data-movie-id", movie.id);

      section.appendChild(img);
    }
  });

  return section;
}

function createMovieContainer(movies, title = "") {
  const movieElement = document.createElement("div");
  movieElement.setAttribute("class", "movie");

  const header = document.createElement("h2");
  header.innerHTML = title;

  const content = document.createElement("div");
  content.classList = "content";

  const contentClose = `<p id="content-close">X</p>`;

  content.innerHTML = contentClose;

  const section = movieSelection(movies);

  movieElement.appendChild(header);
  movieElement.appendChild(section);
  movieElement.appendChild(content);
  return movieElement;
}

function renderSearchMovies(data) {
  // data.results []
  movieSearch.innerHTML = "";
  const movies = data.results;
  const movieBlock = createMovieContainer(movies);
  movieSearch.appendChild(movieBlock);
}

function renderMovies(data) {
  // data.results []
  const movies = data.results;
  const movieBlock = createMovieContainer(movies, this.title);
  movieContainer.appendChild(movieBlock);
}

function searchMovie(value) {
  const path = "/search/movie";
  const url = generateUrl(path) + "&query=" + value;

  requestMovies(url, renderSearchMovies, handleError);
}

function getUpcomingMovie() {
  const path = "/movie/upcoming";
  const url = generateUrl(path);

  const render = renderMovies.bind({ title: "Upcoming Movies" });
  requestMovies(url, render, handleError);
}

function getTopRatedMovie() {
  const path = "/movie/top_rated";
  const url = generateUrl(path);

  const render = renderMovies.bind({ title: "Top Rated Movies" });
  requestMovies(url, render, handleError);
}

function getPopularMovie() {
  const path = "/movie/popular";
  const url = generateUrl(path);

  const render = renderMovies.bind({ title: "Popular Movies" });
  requestMovies(url, render, handleError);
}

function handleError(error) {
  console.log("Error :", error);
}

buttonElement.onclick = function (event) {
  event.preventDefault();
  const value = inputElement.value;
  searchMovie(value);

  inputElement.value = "";
  console.log("Value :", value);
};

// fungsi untuk mengambil trailer movie
function createIframe(video) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${video.key}`;
  iframe.width = 360;
  iframe.height = 315;
  iframe.allowFullscreen = true;

  return iframe;
}

function createVideoTemplate(data, content) {
  // TODO
  // display movie videos
  content.innerHTML = '<p id="content-close">X</p>';
  console.log("Videos :", data);
  const videos = data.results;
  const length = videos.length > 4 ? 4 : videos.length;
  const iframeContainer = document.createElement("div");

  for (let i = 0; i < length; i++) {
    const video = videos[i]; //video
    const iframe = createIframe(video);
    iframeContainer.appendChild(iframe);
    content.appendChild(iframeContainer);
  }
}

document.onclick = function (event) {
  const target = event.target;

  if (target.tagName.toLowerCase() == "img") {
    const movieId = target.dataset.movieId;
    console.log("Movie ID :", movieId);
    const section = event.target.parentElement; //section
    const content = section.nextElementSibling; //content
    content.classList.add("content-display");

    const path = `/movie/${movieId}/videos`;
    const url = generateUrl(path);
    // fetch movie videos
    fetch(url)
      .then((res) => res.json())
      .then((data) => createVideoTemplate(data, content))
      .catch((error) => {
        console.log("Error :", error);
      });
  }

  if (target.id === "content-close") {
    const content = target.parentElement;
    content.classList.remove("content-display");
  }
};

getUpcomingMovie();
getTopRatedMovie();
getPopularMovie();
