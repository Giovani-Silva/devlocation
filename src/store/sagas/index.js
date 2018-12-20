import { all, takeLatest } from 'redux-saga/effects';

import { Types as MapTypes } from '../ducks/maps';
import { addUserRequest, removeUserRequest } from './maps';

export default function* rootSaga() {
  yield all([takeLatest(MapTypes.ADD_REQUEST, addUserRequest)]);
  yield all([takeLatest(MapTypes.ADD_REMOVE, removeUserRequest)]);
}
