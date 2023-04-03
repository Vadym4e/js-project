import axios from "axios";
import { genres } from './genres';

// import { showPreloader, hidePreloader } from './loader';
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const containerListWatchedCard = document.querySelector('.film-list-lib')
const dataWatchedCards = JSON.parse(localStorage.getItem('wathced'))

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '352708f90836dd2b75b209ae082e91df'
let markup = '';

async function onCardWatch(){
    for(const idFilm of dataWatchedCards){
        const oneFilmCard = await getWatchedFilms(idFilm)

        let release = Number.parseInt(oneFilmCard.release_date || oneFilmCard.first_air_date);
        const mainPoster = `https://image.tmdb.org/t/p/w300${oneFilmCard.poster_path}`;
        const posterFake = `https://shop-cdn1.vigbo.tech/shops/48947/products/18863233/images/2-be392e7cfe9a0fa843b29c1e22be8909.jpg`;
  
        let genreMarkup = [];
        genres.forEach(genre => {
          if (oneFilmCard.genres.includes(genre.id)) {
            genreMarkup.push(genre.name);
          }
        });
  
        markup += ` <li class ="film-item">
                <a id='${oneFilmCard.id}' class="film-card" href="#">
                  <div class='thumb'>
                  <img
                      class = 'poster'
                      src= "${oneFilmCard.poster_path ? mainPoster : posterFake}"
                      alt="${oneFilmCard.title}"
                      loading="lazy"
                    /></div>
                    <div class='film-data'>
                      <h2 class="title-film">${oneFilmCard.title}</h2>
                      <p>
                         <span class='info-film'>${genreMarkup.join(', ')} | ${release}</span> 
                        <span class ="rating">IMDB:<br>${oneFilmCard.vote_average.toFixed(1)}</span>
                      </p>
                    </div>
                  </a>
              </li>`;
                console.log(markup)
                console.log(oneFilmCard)
              containerListWatchedCard.insertAdjacentHTML('beforeend',markup)
    }
    
    
}
onCardWatch()


async function getWatchedFilms(page) {
    try {
    const {data} = await axios.get(`${BASE_URL}${page}?api_key=${API_KEY}&language=en-US`)
      return data;
    } catch (error) {
      console.log(error);
    }
  }

// async function getWatchedFilms(idFilm) {
//     try {
      
//         console.log(data)
     
//   containerListWatchedCard.insertAdjacentHTML('beforeend',markup)

//         // console.log(markup)
//     } catch (error) {
//       console.log(error);
//     }
//   }
