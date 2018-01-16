import {
    REQUEST_RECIBOS,
    RECEIVE_RECIBOS,
    APP_ERROR,
    APP_ERROR_RESET,
    
} from '../constants/Actiontypes';

const csmRecibosAppReducer= (state = {
    isSearchingRecibos:false,
    entitiesRecibos:{},
    resultsRecibos: [],
    onError:false,
    errorMessage:''
}, action) => {
    switch (action.type) {
        case REQUEST_RECIBOS:{
            //console.log("reducer REQUEST_STOCKS: "+action.value);
            return {
                ...state,
                isSearchingRecibos: true
            };
            
        }
        case RECEIVE_RECIBOS:{
          
            return {
                ...state,
                isSearchingRecibos:false,
                resultsRecibos:action.value.result,
                entitiesRecibos:action.value.entities.recibo
            };
            
        }
        case APP_ERROR:{
            return {
                ...state,
                onError:true,
                errorMessage:action.value,
                isSearchingOcorrencias:false
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

export default csmRecibosAppReducer;