/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n// api key\r\nconst api_key = \"efe30b0ecdb4d3c785768d107702be4e\";\r\nconst image_url = \"https://image.tmdb.org/t/p/w500\";\r\n\r\nconst url =\r\n  \"https://api.themoviedb.org/3/search/movie?api_key=efe30b0ecdb4d3c785768d107702be4e\";\r\n\r\nconst buttonElement = document.querySelector(\"#search\");\r\nconst inputElement = document.querySelector(\"#inputValue\");\r\nconst movieSearch = document.querySelector(\"#movies-search\");\r\nconst movieContainer = document.querySelector(\"#movies-container\");\r\n\r\nfunction generateUrl(path) {\r\n  const url = `https://api.themoviedb.org/3${path}?api_key=efe30b0ecdb4d3c785768d107702be4e`;\r\n  return url;\r\n}\r\n\r\nfunction requestMovies(url, onComplete, onError) {\r\n  fetch(url)\r\n    .then((res) => res.json())\r\n    .then(onComplete)\r\n    .catch(onError);\r\n}\r\n\r\nfunction movieSelection(movies) {\r\n  const section = document.createElement(\"section\");\r\n  section.classList = \"section\";\r\n\r\n  movies.map((movie) => {\r\n    if (movie.poster_path) {\r\n      const img = document.createElement(\"img\");\r\n      img.src = image_url + movie.poster_path;\r\n      img.setAttribute(\"data-movie-id\", movie.id);\r\n\r\n      section.appendChild(img);\r\n    }\r\n  });\r\n\r\n  return section;\r\n}\r\n\r\nfunction createMovieContainer(movies, title = \"\") {\r\n  const movieElement = document.createElement(\"div\");\r\n  movieElement.setAttribute(\"class\", \"movie\");\r\n\r\n  const header = document.createElement(\"h2\");\r\n  header.innerHTML = title;\r\n\r\n  const content = document.createElement(\"div\");\r\n  content.classList = \"content\";\r\n\r\n  const contentClose = `<p id=\"content-close\">X</p>`;\r\n\r\n  content.innerHTML = contentClose;\r\n\r\n  const section = movieSelection(movies);\r\n\r\n  movieElement.appendChild(header);\r\n  movieElement.appendChild(section);\r\n  movieElement.appendChild(content);\r\n  return movieElement;\r\n}\r\n\r\nfunction renderSearchMovies(data) {\r\n  // data.results []\r\n  movieSearch.innerHTML = \"\";\r\n  const movies = data.results;\r\n  const movieBlock = createMovieContainer(movies);\r\n  movieSearch.appendChild(movieBlock);\r\n}\r\n\r\nfunction renderMovies(data) {\r\n  // data.results []\r\n  const movies = data.results;\r\n  const movieBlock = createMovieContainer(movies, this.title);\r\n  movieContainer.appendChild(movieBlock);\r\n}\r\n\r\nfunction searchMovie(value) {\r\n  const path = \"/search/movie\";\r\n  const url = generateUrl(path) + \"&query=\" + value;\r\n\r\n  requestMovies(url, renderSearchMovies, handleError);\r\n}\r\n\r\nfunction getUpcomingMovie() {\r\n  const path = \"/movie/upcoming\";\r\n  const url = generateUrl(path);\r\n\r\n  const render = renderMovies.bind({ title: \"Upcoming Movies\" });\r\n  requestMovies(url, render, handleError);\r\n}\r\n\r\nfunction getTopRatedMovie() {\r\n  const path = \"/movie/top_rated\";\r\n  const url = generateUrl(path);\r\n\r\n  const render = renderMovies.bind({ title: \"Top Rated Movies\" });\r\n  requestMovies(url, render, handleError);\r\n}\r\n\r\nfunction getPopularMovie() {\r\n  const path = \"/movie/popular\";\r\n  const url = generateUrl(path);\r\n\r\n  const render = renderMovies.bind({ title: \"Popular Movies\" });\r\n  requestMovies(url, render, handleError);\r\n}\r\n\r\nfunction handleError(error) {\r\n  console.log(\"Error :\", error);\r\n}\r\n\r\nbuttonElement.onclick = function (event) {\r\n  event.preventDefault();\r\n  const value = inputElement.value;\r\n  searchMovie(value);\r\n\r\n  inputElement.value = \"\";\r\n  console.log(\"Value :\", value);\r\n};\r\n\r\n// fungsi untuk mengambil trailer movie\r\nfunction createIframe(video) {\r\n  const iframe = document.createElement(\"iframe\");\r\n  iframe.src = `https://www.youtube.com/embed/${video.key}`;\r\n  iframe.width = 360;\r\n  iframe.height = 315;\r\n  iframe.allowFullscreen = true;\r\n\r\n  return iframe;\r\n}\r\n\r\nfunction createVideoTemplate(data, content) {\r\n  // TODO\r\n  // display movie videos\r\n  content.innerHTML = '<p id=\"content-close\">X</p>';\r\n  console.log(\"Videos :\", data);\r\n  const videos = data.results;\r\n  const length = videos.length > 4 ? 4 : videos.length;\r\n  const iframeContainer = document.createElement(\"div\");\r\n\r\n  for (let i = 0; i < length; i++) {\r\n    const video = videos[i]; //video\r\n    const iframe = createIframe(video);\r\n    iframeContainer.appendChild(iframe);\r\n    content.appendChild(iframeContainer);\r\n  }\r\n}\r\n\r\ndocument.onclick = function (event) {\r\n  const target = event.target;\r\n\r\n  if (target.tagName.toLowerCase() == \"img\") {\r\n    const movieId = target.dataset.movieId;\r\n    console.log(\"Movie ID :\", movieId);\r\n    const section = event.target.parentElement; //section\r\n    const content = section.nextElementSibling; //content\r\n    content.classList.add(\"content-display\");\r\n\r\n    const path = `/movie/${movieId}/videos`;\r\n    const url = generateUrl(path);\r\n    // fetch movie videos\r\n    fetch(url)\r\n      .then((res) => res.json())\r\n      .then((data) => createVideoTemplate(data, content))\r\n      .catch((error) => {\r\n        console.log(\"Error :\", error);\r\n      });\r\n  }\r\n\r\n  if (target.id === \"content-close\") {\r\n    const content = target.parentElement;\r\n    content.classList.remove(\"content-display\");\r\n  }\r\n};\r\n\r\ngetUpcomingMovie();\r\ngetTopRatedMovie();\r\ngetPopularMovie();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background: black;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2 {\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.form-group {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n#inputValue {\\r\\n  width: 760px;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 400;\\r\\n  line-height: 1.5;\\r\\n  outline: none;\\r\\n  background: #2f3640;\\r\\n  border-radius: 40px;\\r\\n  padding: 10px;\\r\\n  height: 40px;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n#search {\\r\\n  color: #e84118;\\r\\n  background: #2f3640;\\r\\n  outline: none;\\r\\n  float: right;\\r\\n  display: flex;\\r\\n  min-height: 38px;\\r\\n  font-weight: 400;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  padding: 0.375rem 0.75rem;\\r\\n  font-size: 1rem;\\r\\n  line-height: 1.5;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n#movies-search {\\r\\n  margin-top: 20px;\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.movie {\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  overflow-x: auto;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\nsection img {\\r\\n  width: 300px;\\r\\n}\\r\\n\\r\\nimg:hover {\\r\\n  margin-left: 0 40px;\\r\\n  transform: scale(1.2);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  border: 1px solid lightgray;\\r\\n  padding: 20px;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#content-close {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.content div {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  flex-wrap: wrap;\\r\\n  align-items: center;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.content-display {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  margin: 10px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });