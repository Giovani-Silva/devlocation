/**
 * TYPES
 */
export const Types = {
  RESIZE_MAP: 'maps/RESIZE_MAP',
  SET_OPEN_MODAL: 'maps/SET_OPEN_MODAL',
  ADD_CLEAR_MSG: 'maps/ADD_CLEAR_MSG',
  ADD_LOCATION: 'maps/ADD_LOCATION',
  ADD_REQUEST: 'maps/ADD_REQUEST',
  ADD_SUCCESS: 'maps/ADD_SUCCESS',
  ADD_FAILURE: 'maps/ADD_FAILURE',
  ADD_REMOVE: 'maps/ADD_REMOVE',
  LOCATION_USER: 'maps/LOCATION_USER'
};
/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  adding: false,
  msg: {
    success: null,
    error: null
  },
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
      return {
        ...state,
        adding: !state.adding,
        msg: { success: null, error: null }
      };

    case Types.RESIZE_MAP:
      return {
        ...state,
        viewport: action.payload.viewport,
        msg: { success: null, error: null }
      };

    case Types.ADD_LOCATION:
      return {
        ...state,
        location: action.payload,
        msg: { success: null, error: null }
      };

    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        msg: { success: null, error: null }
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: { success: 'Usuário cadastrado com sucesso', error: null },
        users: [...state.users, action.payload.user]
      };

    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload.error
      };

    case Types.ADD_REMOVE:
      const filtered = state.users.filter(user => user !== action.payload.user);
      return {
        ...state,
        users: filtered,
        msg: { success: null, error: null }
      };

    case Types.LOCATION_USER:
      const locate = {
        ...state.viewport,
        latitude: action.payload.user.latitude,
        longitude: action.payload.user.longitude
      };
      return {
        ...state,
        msg: { success: null, error: null },
        viewport: locate
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
    payload: { viewport }
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
  removeUser: user => ({
    type: Types.ADD_REMOVE,
    payload: { user }
  }),
  locationUser: user => ({
    type: Types.LOCATION_USER,
    payload: { user }
  }),
  addUserLocation: (lon, lat) => ({
    type: Types.ADD_LOCATION,
    payload: { longitude: lon, latitude: lat }
  })
};
