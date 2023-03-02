// Api
import { FETCH_GET } from '../../Api';

// Constantes
const FETCH_DATA_STARTED = 'data/fetchStarted';
const FETCH_DATA_SUCCESS = 'data/fetchSuccess';
const FETCH_DATA_ERROR = 'data/fetchError';

// Action creators
const fetchStarted = () => ({ type: FETCH_DATA_STARTED });
const fetchSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchError = (error) => ({ type: FETCH_DATA_ERROR, payload: error });

// Initial state
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// Reducer
export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_STARTED:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

// Async function
export const fetchData = (id) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const { url, options } = FETCH_GET();
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === false) throw new Error(data.message);
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
