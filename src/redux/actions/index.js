// imports from lib
import axios from 'axios';

// import Types (constants)
import {
    ADD_FAVOURITES,
    FETCH_USER_LIST_SUCCESS,
    REMOVE_FAVOURITES
} from '../types';


// Fetching data from list API ( Random UsersList :: "https://randomuser.me/api/?results=10" )
export const fetchListData = () => {
    return ((dispatch) => {
        axios.get("https://randomuser.me/api/?results=10")
            .then((res) => {
                if (res.status === 200) {
                    dispatch({ type: FETCH_USER_LIST_SUCCESS, payload: res?.data?.results })
                }
            })
            .catch((err) => {
                console.log("Error on Fetching data :: ", err)
            })
    })
}

// Add User in Favourite List
export const addToFavourite = (item) => {
    return ((dispatch) => {
        dispatch({
            type: ADD_FAVOURITES,
            payload: item
        })
    })
}

// Remove User from Favourite List
export const removeFromFavourites = (id) => {
    return ((dispatch) => {
        dispatch({
            type: REMOVE_FAVOURITES,
            payload: id
        })
    })
}