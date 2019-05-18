//Importing these variables from the types.js file, minimizes risks of typos
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_RESTAURANTS,
  CREATE_RESTAURANT,
  FETCH_RESTAURANT,
  DELETE_RESTAURANT
  // EDIT_RESTAURANT
} from "./types";
import API from "../utils/API";
import history from "../history";

//Sign in action handler
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

//Sign out action handler
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//API call action handler - GET request
export const fetchRestaurants = () => async dispatch => {
  const response = await API.getRestaurants();

  dispatch({ type: FETCH_RESTAURANTS, payload: response.data });
};

//API call action handler - POST request
export const createRestaurant = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await API.saveRestaurant({ ...formValues, userId });

  dispatch({ type: CREATE_RESTAURANT, payload: response.data });
  history.push("/");
};

//API call action handler - GET request with ID parameter
export const fetchRestaurant = id => async dispatch => {
  const response = await API.getRestaurant(id);

  dispatch({ type: FETCH_RESTAURANT, payload: response.data });
};

// export const editRestaurant = (id, formValues) => async dispatch => {
//   const response = await API.patch(`/restaurants/${id}`, formValues);

//   dispatch({ type: EDIT_RESTAURANT, payload: response.data });
//   history.push("/");
// };

//API call action handler - DELETE/DESTROY request
export const deleteRestaurant = id => async dispatch => {
  await API.deleteRestaurant(id);

  dispatch({ type: DELETE_RESTAURANT, payload: id });
  history.push("/");
};
