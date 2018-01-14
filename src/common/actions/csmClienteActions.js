import {APP_ERROR,APP_ERROR_RESET,REQUEST_CLIENTES,RECIEVE_CLIENTES
} from '../constants/Actiontypes';
import csmApi from '../api/csmApi';
import {normalize} from 'normalizr';
import {SchemaClientes} from '../constants/clientesSchema';
export const requestDadosClientes=()=>({
    type:REQUEST_CLIENTES
});

export const recieveDadosClientes=value=>({
    type:RECIEVE_CLIENTES,
    value
});

export const setcsmClienteError=value=>({
    type:APP_ERROR,
    value
});
export const resetsetcsmClienteError=()=>({
    type:APP_ERROR_RESET,
});


export const fetchClientes=()=>dispatch=>{
    dispatch(requestDadosClientes());
    csmApi.getClientes()
    .then(result=>{
        //const resultado= JSON.parse(result);
        // console.log('====================================');
        // console.log(`data recieved:${JSON.stringify(result,null,2)}`);
        // console.log('====================================');
        const dataNormalized= normalize(result.listaClientes,SchemaClientes.resultadosClientes);
        // console.log('====================================');
        // console.log(`data recieved:${JSON.stringify(dataNormalized,null,2)}`);
        // console.log('====================================');
        dispatch(recieveDadosClientes(dataNormalized));
    })
    .catch(error=>{
        dispatch(setcsmClienteError(error));
    });
};