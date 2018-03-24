import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_FAIL,
  FETCHING_COIN_SUCCESS
} from "./../utils/ActionTypes";

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
};

export default function(state = [], action) {
  
    switch(action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                haseError: false,
                errorMessage: null
            });

        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                haseError: true,
                errorMessage: action.err
            });

        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                haseError: false,
                errorMessage: null
            });

        default:
            return state;
    }
}
