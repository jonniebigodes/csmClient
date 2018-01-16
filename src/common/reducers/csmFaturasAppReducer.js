import {
    REQUEST_FATURAS,
    RECIEVE_FATURAS,
    APP_ERROR_RESET,
    APP_ERROR
} from '../constants/Actiontypes';

const csmFaturasAppReducer= (state = {
    isSearchingFaturas:false,
    entitiesFaturas:{},
    resultsFaturas: [],
    onError:false,
    errorMessage:''
}, action) => {
    switch (action.type) {
        case REQUEST_FATURAS:{
            //console.log("reducer REQUEST_STOCKS: "+action.value);
            return {
                ...state,
                isSearchingFaturas: true
            };
            
        }
        case RECIEVE_FATURAS:{
          
            return {
                ...state,
                isSearchingFaturas:false,
                resultsFaturas:action.value.result,
                entitiesFaturas:action.value.entities.fatura
            };
            
        }
        case APP_ERROR:{
            return {
                ...state,
                onError:true,
                errorMessage:action.value,
                isSearchingFaturas:false
            };
        }
        
        case APP_ERROR_RESET:{
             //console.log("reducer APP_ERROR_RESET");
             return{
                ...state,
                onError:false,
                errorMessage:''
            };
            
        }
        default:{
            return state;
        }
            
    }
    
};





export default csmFaturasAppReducer;