!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire930e;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequire930e=a);var c=a("bpxeT"),s=a("2TvXO"),i=a("dIxxU"),o=document.querySelector(".secondary"),l=document.querySelector(".lib-btn.current"),u=document.querySelector(".btn-clear-all"),p=document.querySelector(".mylib-wrapper");o.addEventListener("click",(function(){if(o.classList.contains("current"))return;p.innerHTML="",o.classList.toggle("current"),l.classList.toggle("current")})),l.addEventListener("click",(function(){if(l.classList.contains("current"))return;p.innerHTML="",o.classList.toggle("current"),l.classList.toggle("current"),m()})),u.addEventListener("click",(function(){if(l.classList.contains("current"))return localStorage.removeItem("wathced"),void(p.innerHTML="");localStorage.removeItem("queue")}));var d=a("twtVq");a("1Gwk9"),a("cDXQO"),a("kvC6y");var f=document.querySelector(".film-list"),v=JSON.parse(localStorage.getItem("wathced")),g="https://api.themoviedb.org/3/movie/",h="352708f90836dd2b75b209ae082e91df";function m(){return b.apply(this,arguments)}function b(){return(b=e(c)(e(s).mark((function t(){var n,r,a,c,i,o,l,u,p,g,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.innerHTML="",n=!0,r=!1,a=void 0,e.prev=2,c=v[Symbol.iterator]();case 4:if(n=(i=c.next()).done){e.next=20;break}return o=i.value,e.next=8,y(o);case 8:l=e.sent,u=Number.parseInt(l.release_date||l.first_air_date),p="https://image.tmdb.org/t/p/w300".concat(l.poster_path),"https://shop-cdn1.vigbo.tech/shops/48947/products/18863233/images/2-be392e7cfe9a0fa843b29c1e22be8909.jpg",g=[],d.genres.forEach((function(e){l.genres.includes(e.id)&&g.push(e.name)})),h="",h+=' <li class ="film-item">\n                <a id=\''.concat(l.id,"' class=\"film-card\" href=\"#\">\n                  <div class='thumb'>\n                  <img\n                      class = 'poster'\n                      src= \"").concat(l.poster_path?p:"https://shop-cdn1.vigbo.tech/shops/48947/products/18863233/images/2-be392e7cfe9a0fa843b29c1e22be8909.jpg",'"\n                      alt="').concat(l.title,'"\n                      loading="lazy"\n                    /></div>\n                    <div class=\'film-data\'>\n                      <h2 class="title-film">').concat(l.title,"</h2>\n                      <p>\n                         <span class='info-film'>").concat(g.join(", ")," | ").concat(u,'</span>\n                        <span class ="rating">IMDB:<br>').concat(l.vote_average.toFixed(1),"</span>\n                      </p>\n                    </div>\n                  </a>\n              </li>"),f.insertAdjacentHTML("beforeend",h);case 17:n=!0,e.next=4;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(2),r=!0,a=e.t0;case 26:e.prev=26,e.prev=27,n||null==c.return||c.return();case 29:if(e.prev=29,!r){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:case"end":return e.stop()}}),t,null,[[2,22,26,34],[27,,29,33]])})))).apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return(x=e(c)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(g).concat(n,"?api_key=").concat(h,"&language=en-US"));case 3:return r=e.sent.data,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}m()}();
//# sourceMappingURL=my-library.02d8a86c.js.map