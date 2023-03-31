import { getPopularFilms } from './js/api';
import { renderFilmList } from './js/renderFilmList';
import {getSearchMovie, onSearch, addMovie } from './js/search';

async function addItem() {
  let data = await getPopularFilms();
  renderFilmList(data);
}

addItem();
