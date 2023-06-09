// src/js/search.js
import axios from 'axios';
import { renderFilmList } from './renderFilmList';
import { addItem } from '../index';
import { initSearchPagination, updateSearchFilmList } from './pagination';
import { showPreloader, hidePreloader } from './loader';

const gallery = document.querySelector('.film-list');
const searchFormEl = document.querySelector('.header__movie-search-form');
const inputEl = document.querySelector('.movie-search-form');
const errorEl = document.querySelector('.search-error-message');
const choiceGanre = document.querySelector('.choice-ganre');
const KEY = '352708f90836dd2b75b209ae082e91df';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
let name;
let page = 1;
let pages;

export async function getSearchMovie(name, page) {
  try {
    const { data } = await instance.get(
      `search/movie?api_key=${KEY}&language=en-US&query=${name}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export function onSearch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  name = inputEl.value.trim();
  page = 1;
  if (name !== '') {
    errorEl.classList.add('visually-hidden');
    showPreloader();
    addSearchedMovie(name, page)
      .then(() => {
        hidePreloader();
      })
      .catch(error => {
        hidePreloader();
      });
  } else {
    errorEl.classList.remove('visually-hidden');
    addItem();
    return console.log(
      'Sorry, there are no films matching your search query. Please try again.'
    );
  }
}

export async function addSearchedMovie(name, page) {
  const searchResult = await getSearchMovie(name, page);

  if (searchResult.results.length !== 0) {
    errorEl.classList.add('visually-hidden');
    const totalPages = searchResult.total_pages;
    const totalItems = searchResult.total_results;
    initSearchPagination(totalItems, name);
    renderFilmList({ ...searchResult });
  } else {
    errorEl.classList.remove('visually-hidden');
    page = 1;
    addItem();
    return;
  }
}

if (searchFormEl) {
  searchFormEl.addEventListener('submit', onSearch);
}

if (inputEl) {
  inputEl.addEventListener('blur', () => {
    errorEl.classList.add('visually-hidden');
  });
}
