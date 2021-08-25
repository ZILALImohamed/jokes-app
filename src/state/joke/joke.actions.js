import {createAction} from '@reduxjs/toolkit'

export const GET_TEN_RANDOM_JOKES = 'joke/getTenRandomJokes'
export const GET_TEN_RANDOM_JOKES_SUCCESS = 'joke/getTenRandomJokesSuccess'
export const GET_TEN_RANDOM_JOKES_FAIL = 'joke/getTenRandomJokesFail'


export const getTenRandomJokes = createAction(GET_TEN_RANDOM_JOKES)
export const getTenRandomJokesSuccess = createAction(GET_TEN_RANDOM_JOKES_SUCCESS)
export const getTenRandomJokesFail = createAction(GET_TEN_RANDOM_JOKES_FAIL)