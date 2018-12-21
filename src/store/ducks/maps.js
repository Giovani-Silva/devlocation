/**
 * TYPES
 */
export const Types = {
  RESIZE_MAP: 'maps/RESIZE_MAP',
  SET_OPEN_MODAL: 'maps/SET_OPEN_MODAL',
  ADD_LOCATION: 'maps/ADD_LOCATION',
  ADD_REQUEST: 'maps/ADD_REQUEST',
  ADD_SUCCESS: 'maps/ADD_SUCCESS',
  ADD_FAILURE: 'maps/ADD_FAILURE',
  ADD_REMOVE: 'maps/ADD_REMOVE',
  ADD_REMOVED: 'maps/ADD_REMOVED'
};
/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  adding: false,
  error: null,
  users: [],
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: -46.55257005669249,
    latitude: -23.70423810819026,
    zoom: 14
  },
  location: {
    latitude: null,
    longitude: null
  }
};
export default function maps(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_OPEN_MODAL:
      return { ...state, adding: !state.adding };

    case Types.RESIZE_MAP:
      return { ...state, viewport: action.payload.viewport };

    case Types.ADD_LOCATION:
      return { ...state, location: action.payload };

    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: [...state.users, action.payload.user]
      };

    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case Types.ADD_REMOVE:
      const filtered = state.users.filter(user => user !== action.payload.user);
      return {
        ...state,
        users: filtered
      };

    case Types.ADD_REMOVED:
      return {
        ...state
      };

    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  setOpenModal: () => ({ type: Types.SET_OPEN_MODAL }),
  resizeMap: viewport => ({
    type: Types.RESIZE_MAP,
    payload: {
      viewport
    }
  }),
  addUserRequest: (username, lon, lat) => ({
    type: Types.ADD_REQUEST,
    payload: { username, lon, lat }
  }),
  addUserSuccess: user => ({
    type: Types.ADD_SUCCESS,
    payload: { user }
  }),
  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),
  removeUserRequest: user => ({
    type: Types.ADD_REMOVE,
    payload: { user }
  }),
  removeUserSuccess: user => ({
    type: Types.ADD_REMOVED,
    payload: { user }
  }),
  addUserLocation: (lon, lat) => ({
    type: Types.ADD_LOCATION,
    payload: { longitude: lon, latitude: lat }
  })
};
