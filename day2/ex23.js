console.log('start of script');

const searchText = 'spider';
const apikey = 'aa9e49f';
const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchText}`;

const xhr = new XMLHttpRequest(); // xhr.readyState <-- 0
xhr.onreadystatechange = function () {
    // console.log('xhr.readyState changed to', xhr.readyState, xhr.responseText);
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);
    }
};
xhr.open('GET', url, true); // xhr.readyState <-- 1
xhr.send(null); // xhr.readyState <-- 2, 3 (interactive), 4 (response complete)

console.log('end of script');
