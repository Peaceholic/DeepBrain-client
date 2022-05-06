import {all} from 'redux-saga/effects'
import { watchJoin, watchLogin, watchLogout } from './userSaga.ts'
import { watchAddCompnay, watchUpdateCompnay , watchDeleteCompnay } from './companySaga.ts'


export default function* rootSaga(){
    yield all([
        watchJoin(), 
        watchLogin(), 
        watchLogout(),
        watchAddCompnay(),
        watchUpdateCompnay(),
        watchDeleteCompnay()
    ])

}