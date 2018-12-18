/**
 * TYPES
 */
const Types = {
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
    },
    {
      id: 2,
      name: 'Diego Fernandes',
      avatar_url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
      longitude: -46.704901633557576,
      latitude: -23.598989094582578
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
    case Types.ADD_REQUEST:
      console.log('Reducer Types.ADD_REQUEST');
      console.log(action.payload);
      return state;

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
  addUserMap: repository => ({
    type: Types.ADD_REQUEST,
    payload: {
      repository
    }
  })
};
