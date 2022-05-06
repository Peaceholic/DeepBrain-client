import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { companyActions } from '../reducers/companyReducer.ts';
import { addCompanyApi, updateCompanyApi, deleteCompanyApi } from '../api/companyApi.ts'


interface CompanyType{
    type: string;
    payload: {
        companyName: String,
        sortCode: String,
        service: String,
        majorProduct: String,
        startDate: String,
        ceoName: String,
        webpage: String,
        region: String
    }
}

interface CompanySuccessType{
    type: string;
    payload: {
        ok: string
    }
}

function* addCompany(company: CompanyType){
    try{
        const response : CompanySuccessType = yield addCompanyApi(company.payload)
        yield put(companyActions.addCompanySuccess(response))
    }catch(error){
         yield put(companyActions.addCompanyFailure(error))
    }
}
export function* watchAddCompany(){
    yield takeLatest(companyActions.addCompanyRequest, addCompany)
}

function* updateCompany(company: CompanyType){
    try {
      const response : CompanySuccessType = yield updateCompanyApi(company.payload)
      yield put(companyActions.updateCompanySuccess(response))
    } catch (err) {
      yield put(companyActions.updateCompanyFailure(err))
    }
}
  
export function* watchUpdateCompany(){
    yield takeLatest(companyActions.updateCompanyRequest, updateCompany)
}
 
function* deleteCompany(company: CompanyType){
    try{
        const response : CompanySuccessType = yield deleteCompanyApi(company.payload)
        yield put(companyActions.deleteCompanySuccess(response))
    }catch(err){
         console.log(err);
         yield put(companyActions.deleteCompanyFailure(err))
    }
}
export function* watchDeleteCompany(){
    yield takeLatest(companyActions.deleteCompanyRequest, deleteCompany)
} 