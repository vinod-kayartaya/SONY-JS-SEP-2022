const axios = require('axios');

const searchText = 'spider';
const apikey = 'aa9e49f';
const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchText}`;

console.log('start of script');

// axios
//     .get(url)
//     .then((resp) => resp.data) // returns a promise containing data as the resolved value
//     .then((data) => data.Search)
//     .then((movies) => movies.map((m) => m.Title))
//     .then(console.log)
//     .catch(console.error);

(async () => {
    try {
        const resp = await axios.get(url);
        const movies = resp.data.Search;
        const titles = movies.map((m) => m.Title);
        titles.forEach((title, index) => console.log(index + 1, '-->', title));
    } catch (err) {
        console.error(err);
    }
})();
console.log('end of script');
