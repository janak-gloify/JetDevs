import {
    FETCH_USER_LIST,
    FETCH_USER_LIST_ERROR,
    FETCH_USER_LIST_SUCCESS,
    ON_REFRESH,
    ADD_FAVOURITES,
    REMOVE_FAVOURITES
} from "../types";

const initialState = {
    loading: false,
    refreshing: false,
    userList: [],
    favourites: []
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_USER_LIST:
            return {
                ...state,
                loading: true
            }

        case ON_REFRESH:
            return {
                ...state,
                refreshing: true,
                userList: [],
            }

        case FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                userList: [...state.userList, ...action.payload],
                refreshing: false
            }

        case FETCH_USER_LIST_ERROR:
            return {
                ...state,
                loading: false
            }

        case ADD_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }

        case REMOVE_FAVOURITES: {
            const favourites = state?.favourites?.filter((e, i) => e?.login?.uuid !== action.payload);
            return {
                ...state,
                favourites: favourites
            }
        }

        default:
            return state;
    }
}

export default dashboardReducer;