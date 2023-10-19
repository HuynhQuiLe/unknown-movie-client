import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./reducer/user/loginReducer";
import { logoutReducer } from "./reducer/user/logoutReducer";
import { carouselReducer } from "./reducer/carousel/carouselReducer";
import { allMoviesReducer } from "./reducer/movie/allMoviesReducer";
import { movieDetailsReducer } from "./reducer/movie/movieDetailsReducer";
import { getMoviesByTheaterReducer } from "./reducer/theater/getMoviesByTheaterReducer";
import { effectReducer } from "./reducer/effect/effectReducer";
import { getAllCommentsByMaPhimReducer } from "./reducer/comment/getAllCommentsByMaPhimReducer";
import { createNewCommentReducer } from "./reducer/comment/createNewCommentReducer";
import { getAllTheatersReducer } from "./reducer/theater/getAllTheatersReducer";
import { getAllCumRapsReducer } from "./reducer/branch/getAllCumRapsReducer";
import { bookingReducer } from "./reducer/booking/bookingReducer";
import { registerReducer } from "./reducer/user/registerReducer";
import { getLayoutGheByMaSuatChieuReducer } from "./reducer/seat/getLayoutGheByMaSuatChieuReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const rootReducer = combineReducers({
  loginReducer,
  logoutReducer,
  carouselReducer,
  allMoviesReducer,
  movieDetailsReducer,
  getMoviesByTheaterReducer,
  effectReducer,
  getAllCommentsByMaPhimReducer,
  createNewCommentReducer,
  getAllTheatersReducer,
  getAllCumRapsReducer,
  bookingReducer,
  registerReducer,
  getLayoutGheByMaSuatChieuReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;
