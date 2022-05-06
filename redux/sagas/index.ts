import {all} from 'redux-saga/effects'
import { watchJoin, watchLogin, watchLogout } from './userSaga.ts'
import { watchAddCompany, watchUpdateCompany , watchDeleteCompany } from './companySaga.ts'


export default function* rootSaga(){
    yield all([
        watchJoin(), 
        watchLogin(), 
        watchLogout(),
        watchAddCompany(),
        watchUpdateCompany(),
        watchDeleteCompany()
    ])

}