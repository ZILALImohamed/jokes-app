import {
  GET_TEN_RANDOM_JOKES,
  GET_TEN_RANDOM_JOKES_SUCCESS,
  GET_TEN_RANDOM_JOKES_FAIL,
  getTenRandomJokes,
  getTenRandomJokesSuccess,
  getTenRandomJokesFail
} from './joke.actions'

const initialState = {
  isLoading: false,
  data: null,
  error: null
}


const jokeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTenRandomJokes, (state, action) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(getTenRandomJokesSuccess, (state, action) => ({
      ...state,
      data: action.data,
      isLoading: false,
    }))
    .addCase(getTenRandomJokesFail, (state, action) => ({
      ...state,
      error: action.error,
      isLoading: false,
    }))
})
