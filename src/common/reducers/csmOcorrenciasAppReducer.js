import {
    REQUEST_OCORRENCIAS,
    RECIEVE_OCORRENCIAS,
    APP_ERROR,
    APP_ERROR_RESET,
    
} from '../constants/Actiontypes';

const csmOcorrenciasAppReducer= (state = {
    isSearchingOcorrencias:false,
    entitiesOcorrencias:{},
    resultsOcorrencias: [],
    onError:false,
    errorMessage:''
}, action) => {
    switch (action.type) {
        case REQUEST_OCORRENCIAS:{
            //console.log("reducer REQUEST_STOCKS: "+action.value);
            return {
                ...state,
                isSearchingOcorrencias: true
            };
            
        }
        case RECIEVE_OCORRENCIAS:{
            return {
                ...state,
                isSearchingOcorrencias:false,
                resultsOcorrencias:action.value.result,
                entitiesOcorrencias:action.value.entities.ocorrencia
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

export default csmOcorrenciasAppReducer;