import {APP_ERROR,APP_ERROR_RESET,REQUEST_OCORRENCIAS,RECIEVE_OCORRENCIAS
} from '../constants/Actiontypes';
import csmApi from '../api/csmApi';
import {normalize} from 'normalizr';
import {SchemaOcorrencias} from '../constants/ocorrenciasSchema';
export const requestDadosOcorrencias=()=>({
    type:REQUEST_OCORRENCIAS
});

export const recieveDadosOcorrencias=value=>({
    type:RECIEVE_OCORRENCIAS,
    value
});

export const setcsmOcorrenciaError=value=>({
    type:APP_ERROR,
    value
});
export const resetsetcsmOcorrenciaError=()=>({
    type:APP_ERROR_RESET,
});


export const fetchOcorrencias=()=>dispatch=>{
    dispatch(requestDadosOcorrencias());
    csmApi.getOcorrencias()
    .then(result=>{
        //const resultado= JSON.parse(result);
        console.log('====================================');
        console.log(`data recieved:${JSON.stringify(result,null,2)}`);
        console.log('====================================');

        const normalizedData= normalize(result.listaOcorrencias,SchemaOcorrencias.resultadosOcorrencias);
         console.log('====================================');
         console.log(`data recieved ocorrencias:${JSON.stringify(normalizedData,null,2)}`);
        console.log('====================================');
        dispatch(recieveDadosOcorrencias(normalizedData));
    })
    .catch(error=>{
        dispatch(resetsetcsmOcorrenciaError(error));
    });
};