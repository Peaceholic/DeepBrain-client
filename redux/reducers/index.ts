import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import users from './userReducer.ts'
import company from './companyReducer.ts'


const rootReducer = (state:any, action:any) => {
    if (action.type === HYDRATE) {
        return {
          ...state,
          ...action.payload,
        };
      }
    return combineReducers({
        users, company
    })(state, action)
}
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>