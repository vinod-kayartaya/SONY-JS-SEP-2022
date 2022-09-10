console.log('start of script');

const searchText = 'spider';
const apikey = 'aa9e49f';
const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchText}`;

fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.Search)
    .then((movies) => movies.map((movie) => movie.Title))
    .then(console.log)
    .catch(console.error);

(async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const movies = data.Search;
    const titles = movies.map((movie) => movie.Title);
    console.log(titles);
})();

console.log('end of script');
