import {APP_ERROR,APP_ERROR_RESET,REQUEST_RECIBOS,RECEIVE_RECIBOS
} from '../constants/Actiontypes';
import csmApi from '../api/csmApi';
import {normalize} from 'normalizr';
import {recibosSchema} from '../constants/recibosSchema';
export const requestDadosRecibos=()=>({
    type:REQUEST_RECIBOS
});

export const recieveDadosRecibos=value=>({
    type:RECEIVE_RECIBOS,
    value
});

export const setcsmOcorrenciaError=value=>({
    type:APP_ERROR,
    value
});
export const resetsetcsmReciboError=()=>({
    type:APP_ERROR_RESET,
});

export const fetchRecibos=()=>dispatch=>{
    dispatch(requestDadosRecibos());
    csmApi.getRecibos()
    .then(result=>{
        //const resultado= JSON.parse(result);
        // console.log('====================================');
        // console.log(`data recieved:${JSON.stringify(result,null,2)}`);
        // console.log('====================================');

        const datanormalized=normalize(result.listaRecibos,recibosSchema.resultadosRecibos);
        // console.log('====================================');
        // console.log(`data recieved:${JSON.stringify(datanormalized,null,2)}`);
        // console.log('====================================');
        dispatch(recieveDadosRecibos(datanormalized));
    })
    .catch(error=>{
        dispatch(resetsetcsmReciboError(error));
    });
};