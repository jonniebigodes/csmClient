import {
    REQUEST_CLIENTES,
    RECIEVE_CLIENTES,
    APP_ERROR_RESET,
    APP_ERROR
} from '../constants/Actiontypes';

const csmClientesAppReducer= (state = {
    isSearchingClientes:false,
    entities:{},
    results: [],
    onError:false,
    errorMessage:''
}, action) => {
    switch (action.type) {
        case REQUEST_CLIENTES:{
            //console.log("reducer REQUEST_STOCKS: "+action.value);
            return {
                ...state,
                isSearchingClientes: true
            };
            
        }
        case RECIEVE_CLIENTES:{
          
            return {
                ...state,
                isSearchingClientes:false,
                results:action.value.result,
                entities:action.value.entities.cliente
            };
            
        }
        case APP_ERROR:{
            return {
                ...state,
                onError:true,
                errorMessage:action.value
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





export default csmClientesAppReducer;