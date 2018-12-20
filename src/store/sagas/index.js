import { all, takeLatest } from 'redux-saga/effects';

import { Types as MapTypes } from '../ducks/maps';
import { addUserMap } from './maps';

export default function* rootSaga() {
  yield all([takeLatest(MapTypes.ADD_REQUEST, addUserMap)]);
}
