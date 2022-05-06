import axios, {Axios, AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}

export interface CompanyType {
    companyName: String,
    sortCode: String,
    service: String,
    majorProduct: String,
    startDate: String,
    ceoName: String,
    webpage: String,
    region: String
}

export const addCompanyApi = async (payload : {
    companyName: String,
    sortCode: String,
    service: String,
    majorProduct: String,
    startDate: String,
    ceoName: String,
    webpage: String,
    region: String
}) => {
    try {
        const loginUser = sessionStorage.getItem('loginUser')
        if(loginUser === null){
            alert("권한이 없습니다.")
            return
        }
        const response: AxiosResponse<unknown, CompanyType[]> = await axios.post(
            `${SERVER}/company/add`,
            payload,
            {headers}
        )
        
        return response.data
    } catch (err) {
        return err;
    }
}

export const updateCompanyApi = async (payload: {
    companyName: String,
    sortCode: String,
    service: String,
    majorProduct: String,
    startDate: String,
    ceoName: String,
    webpage: String,
    region: String
}) => {
  try {
    const loginUser = sessionStorage.getItem('loginUser')
    if(loginUser === null){
        alert("권한이 없습니다.")
        return
    }
    const response: AxiosResponse<unknown, CompanyType[]> = await axios.patch(
            `${SERVER}/company/${payload.companyName}`,
            payload,
            { headers }
        );
        return response.data;
    } catch (err) {
        return err;
  }
};

export const deleteCompanyApi = async(payload: {
    id: string;
}) =>{
    try{
        const loginUser = sessionStorage.getItem('loginUser')
        if(loginUser === null){
            alert("권한이 없습니다.")
            return EvalError("permission denied")
        }
        const response: AxiosResponse<unknown, CompanyType[]> = await axios.delete(
            `${SERVER}/company/${payload.id}`,
            { headers }
        );
        return response.data;
    }catch(err){
        return err;
    }
};

