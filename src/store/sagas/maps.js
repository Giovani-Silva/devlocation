import api from '../../services/api';
import { call, put, select } from 'redux-saga/effects';
import { Creators as MapActions } from '../ducks/maps';

export function* addUserRequest(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.username}`);

    /* const isDuplicate = yield select(state =>
      state.maps.users.find(user => user.id === data.id)
    ); */

    // if (isDuplicate) {
    //   yield put(FavoriteActions.addFavoriteFailure('Repositório duplicado'));
    // } else {
    const userData = {
      id: data.id,
      name: data.name,
      username: data.login,
      avatar_url: data.avatar_url,
      longitude: action.payload.lon,
      latitude: action.payload.lat
    };

    yield put(MapActions.addUserSuccess(userData));
    // }
  } catch (err) {
    yield put(MapActions.addUserFailure('Erro ao adicionar repositório'));
  }
}
