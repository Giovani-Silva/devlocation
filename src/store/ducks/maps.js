/**
 * TYPES
 */
const Types = {
  RESIZE_MAP: 'maps/RESIZE_MAP',
  ADD_REQUEST: 'maps/ADD_REQUEST',
  ADD_SUCCESS: 'maps/ADD_SUCCESS',
  ADD_FAILURE: 'maps/ADD_FAILURE'
};
/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  error: null,
  users: [
    {
      id: 1,
      name: 'Giovani Silva',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6223139?v=4',
      longitude: -46.72007220774839,
      latitude: -23.600031238069292
    }
  ],
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: -46.72007220774839,
    latitude: -23.600031238069292,
    zoom: 14
  }
};
export default function maps(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.RESIZE_MAP:
      return { ...state, viewport: action.payload.viewport };

    case Types.ADD_REQUEST:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: Math.random(),
            name: 'Giovani Silva',
            avatar_url: 'https://avatars3.githubusercontent.com/u/6223139?v=4',
            longitude: action.payload.lon,
            latitude: action.payload.lat
          }
        ]
      };

    case Types.ADD_SUCCESS:
      return state;

    case Types.ADD_FAILURE:
      return state;

    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  resizeMap: viewport => ({
    type: Types.RESIZE_MAP,
    payload: {
      viewport
    }
  }),
  addUserMap: (lon, lat) => ({
    type: Types.ADD_REQUEST,
    payload: { lon, lat }
  })
};
