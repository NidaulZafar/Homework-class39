'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
    if (response.ok) {
      try {
        return data;
      } catch (error) {
        throw new Error (error.message);
      }
    }
}

function fetchAndPopulatePokemons(names) {
  const option = document.createElement('option');
  option.textContent = names;
  const select = document.getElementById('names-list');
  select.appendChild(option);
}

async function fetchImage(url) {
  const data = await fetchData(url);
  const imgEl = document.getElementById('pokemon-images');
  imgEl.src = data.sprites.other['dream_world']['front_default'];
}

function errorCallback(error) {
  document.body.textContent = '';
  const errorEl = document.createElement('h1');
  errorEl.classList = 'error';
  errorEl.textContent = `Oops.. There is some problem. ${error.message}`;
  document.body.appendChild(errorEl);
}

async function main() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.type = 'text';
    const select = document.createElement('select');
    select.id = 'names-list';
    const imgEl = document.createElement('img');
    imgEl.id = 'pokemon-images';
    imgEl.src = '#';
    imgEl.alt = 'Pokemon pics!';
    button.textContent = 'Get Pokemon!';
    document.body.appendChild(div);
    div.appendChild(button);
    button.addEventListener('click', () => {
      div.appendChild(select);
      data.results.forEach((element) => {
        fetchAndPopulatePokemons(element.name);
      });
      select.addEventListener('change', (event) => {
        data.results.forEach((element) => {
          if (element.name === event.target.value) {
            fetchImage(element.url);
            div.appendChild(imgEl);
          }
        });
      });
    });
  } catch (error) {
    errorCallback(error);
  }
}

window.addEventListener('load', main);
