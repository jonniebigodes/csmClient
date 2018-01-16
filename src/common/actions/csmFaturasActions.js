import {
    APP_ERROR,
    APP_ERROR_RESET,
    REQUEST_FATURAS,
    RECIEVE_FATURAS
} from '../constants/Actiontypes';
import csmApi from '../api/csmApi';
import {normalize} from 'normalizr';
import {FaturasSchema} from '../constants/faturasSchema';

export const requestDadosFaturas=()=>({
    type:REQUEST_FATURAS
});
export const recieveDadosFaturas=value=>({
    type:RECIEVE_FATURAS,
    value
});
export const setcsmFaturasError=value=>({
    type:APP_ERROR,
    value
});
export const resetsetcmsFaturasError=()=>({
    type:APP_ERROR_RESET,
});

export const fetchFaturas=()=>dispatch=>{
    dispatch(requestDadosFaturas());
    csmApi.getFaturas()
    .then(result=>{
        // console.log('====================================');
        // console.log(`data recieved:${JSON.stringify(result,null,2)}`);
        // console.log('====================================');
        const datanormalized= normalize(result.listaFaturas,FaturasSchema.resultadosFaturas);
        // console.log('====================================');
        // console.log(`data recieved:${JSON.stringify(datanormalized,null,2)}`);
        // console.log('====================================');
        dispatch(recieveDadosFaturas(datanormalized));
    })
    .catch(error=>{
        dispatch(setcsmFaturasError(error));
    });
};