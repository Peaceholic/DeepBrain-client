import { createSlice } from "@reduxjs/toolkit"

export interface CompanyType{
    companyName: String,
    sortCode: String,
    service: String,
    majorProduct: String,
    startDate: String,
    ceoName: String,
    webpage: String,
    region: String
}

export interface CompanyState{
    loading: boolean;
    data: CompanyType[];
    error: any;
}


const initialState: CompanyState = {
    loading: false,
    data: [],
    error: null
}

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        addCompanyRequest(state: CompanyState, payload) {
            state.loading = true; 
        },
        addCompanySuccess(state: CompanyState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
        },
        addCompanyFailure(state: CompanyState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },        

        updateCompanyRequest(state: CompanyState, payload) {
            state.loading = true;
        },
        updateCompanySuccess(state: CompanyState, { payload }) {
            state.data = [...state.data, payload];
            state.loading = false;
        },
        updateCompanyFail(state: CompanyState, { payload }) {
            state.data = payload;
            state.loading = false;
        },
        
        deleteCompanyRequest(state: CompanyState, {payload}){
            state.loading = false;
        },
        deleteCompanySuccess(state: CompanyState, {payload}){ 
            state.data = [...state.data, payload];
            state.loading = false;
        },
        deleteCompanyFailure(state: CompanyState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
    },
})
const { reducer, actions } = companySlice
export const companyActions = actions
export default reducer