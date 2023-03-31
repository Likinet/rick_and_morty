import axios from 'axios';

// export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const GET_FAVORITES = 'GET_FAVORITES';

// export const addFavorite = (character) => {

//     return {    type: ADD_FAVORITE,
//                 payload: character }

// }

export const removeFavorite = (id) => {
    return {    type: REMOVE_FAVORITE,
                payload:id }
}

export const filterCards = (gender) => {
    return {    type: FILTER,
                payload:gender }
}

export const orderCards = (id) => {
    return {    type: ORDER,
                payload:id }
}

export const getFavorites = () => {
    return async function (dispatch) {
        const URL_BASE='http://localhost:3001';
        const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
        dispatch({type: GET_FAVORITES, payload: response.data})
    }
}