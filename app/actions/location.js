import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import Api from '../lib/api';

// location action
export function getLocation() {
  return (dispatch, getState) => {
    if (navigator.geolocation) {
      /* geolocation is available */
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            dispatch({
              type: types.GET_LOCATION,
              geolocation: position
            });
            resolve(position);
          }, (error) => {
            alert(JSON.stringify(error));
            dispatch({
              type: types.GET_LOCATION_FAILED,
              geolocation: null
            });
          },
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
      });
    } else {
      console.log('no geolocation available');
      /* geolocation IS NOT available */
      dispatch({
        type: types.GET_LOCATION_FAILED,
        geolocation: null
      });
    }
  }
}