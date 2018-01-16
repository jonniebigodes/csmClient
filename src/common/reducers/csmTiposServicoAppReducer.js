import {
    REQUEST_TIPOS_SERVICOS,
    RECIEVE_TIPOS_SERVICOS,
    APP_ERROR,
    APP_ERROR_RESET,
    
} from '../constants/Actiontypes';

const csmTiposServicoAppReducer= (state = {
    isSearchingTiposServico:false,
    entitiesTiposServico:{},
    resultsTiposServico: [],
    onError:false,
    errorMessage:''
}, action) => {
    switch (action.type) {
        case REQUEST_TIPOS_SERVICOS:{
            //console.log("reducer REQUEST_STOCKS: "+action.value);
            return {
                ...state,
                isSearchingTiposServico: true
            };
            
        }
        case RECIEVE_TIPOS_SERVICOS:{
          
            return {
                ...state,
                isSearchingTiposServico:false,
                resultsTiposServico:action.value.result,
                entitiesTiposServico:action.value.entities.tipoServico
            };
            
        }
        case APP_ERROR:{
            return {
                ...state,
                onError:true,
                errorMessage:action.value,
                isSearchingTiposServico:false
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

export default csmTiposServicoAppReducer;