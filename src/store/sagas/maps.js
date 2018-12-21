import api from '../../services/api';
import { call, put, select } from 'redux-saga/effects';
import { Creators as MapActions } from '../ducks/maps';

export function* addUserRequest(action) {
  let msg;
  try {
    const { data } = yield call(api.get, `/users/${action.payload.username}`);

    const isDuplicate = yield select(state =>
      state.maps.users.find(user => user.id === data.id)
    );

    if (isDuplicate) {
      console.tron.log('isDuplicate', isDuplicate);
      msg = { success: null, error: 'Usuário duplicado' };
      yield put(MapActions.addUserFailure(msg));
    } else {
      const userData = {
        id: data.id,
        name: data.name || data.login,
        username: data.login,
        avatar_url: data.avatar_url,
        longitude: action.payload.lon,
        latitude: action.payload.lat
      };

      yield put(MapActions.addUserSuccess(userData));
    }
  } catch (err) {
    msg = { success: null, error: 'Usuário não encontrado' };
    yield put(MapActions.addUserFailure(msg));
  }
}
