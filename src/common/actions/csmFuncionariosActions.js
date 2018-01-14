import {APP_ERROR,APP_ERROR_RESET,REQUEST_FUNCIONARIOS,RECIEVE_FUNCIONARIOS
} from '../constants/Actiontypes';
import csmApi from '../api/csmApi';
import {normalize} from 'normalizr';
import {SchemaFuncionarios} from '../constants/funcionariosSchema';
export const requestDadosFuncionarios=()=>({
    type:REQUEST_FUNCIONARIOS
});

export const recieveDadosFuncionarios=value=>({
    type:RECIEVE_FUNCIONARIOS,
    value
});

export const setcsmFuncionarioError=value=>({
    type:APP_ERROR,
    value
});
export const resetsetcsmFuncionarioError=()=>({
    type:APP_ERROR_RESET,
});


export const fetchFuncionarios=()=>dispatch=>{
    dispatch(requestDadosFuncionarios());
    csmApi.getFuncionarios()
    .then(result=>{
        //const resultado= JSON.parse(result);
        console.log('====================================');
        console.log(`data recieved:${JSON.stringify(result,null,2)}`);
        console.log('====================================');
        const normalizedData=normalize(result.listaFuncionarios,SchemaFuncionarios.resultadosFuncionarios);
        console.log('====================================');
        console.log(`data recieved:${JSON.stringify(normalizedData,null,2)}`);
        console.log('====================================');
        dispatch(recieveDadosFuncionarios(normalizedData));

    })
    .catch(error=>{
        dispatch(setcsmFuncionarioError(error));
    });
};