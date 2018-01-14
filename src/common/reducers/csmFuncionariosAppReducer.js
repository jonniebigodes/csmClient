import {
    REQUEST_FUNCIONARIOS,
    RECIEVE_FUNCIONARIOS,
    APP_ERROR,
    APP_ERROR_RESET,
    
} from '../constants/Actiontypes';

const csmFuncionariosAppReducer= (state = {
    isSearchingFuncionarios:false,
    entitiesFuncionarios:{},
    resultsFuncionarios: [],
    onError:false,
    errorMessage:''
}, action) => {
    switch (action.type) {
        case REQUEST_FUNCIONARIOS:{
            //console.log("reducer REQUEST_STOCKS: "+action.value);
            return {
                ...state,
                isSearchingFuncionarios: true
            };
            
        }
        case RECIEVE_FUNCIONARIOS:{
          
            return {
                ...state,
                isSearchingFuncionarios:false,
                resultsFuncionarios:action.value.result,
                entitiesFuncionarios:action.value.entities.funcionario
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





export default csmFuncionariosAppReducer;