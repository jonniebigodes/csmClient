import {
    APP_ERROR,
    APP_ERROR_RESET,
    REQUEST_TIPOS_SERVICOS,
    RECIEVE_TIPOS_SERVICOS
} from '../constants/Actiontypes';
import csmApi from '../api/csmApi';

import {normalize} from 'normalizr';
import {SchemaTiposServico} from '../constants/tiposServicoSchema';

export const requestDadosTiposServico=()=>({
    type:REQUEST_TIPOS_SERVICOS
});

export const recieveDadosTipoServico=value=>({
    type:RECIEVE_TIPOS_SERVICOS,
    value
});

export const setcsmTipoServicoError=value=>({
    type:APP_ERROR,
    value
});
export const resetsetcsmTipoServicoError=()=>({
    type:APP_ERROR_RESET,
});


export const fetchServicos=()=>dispatch=>{
    dispatch(requestDadosTiposServico());
    csmApi.getTiposServico()
    .then(result=>{
        //const resultado= JSON.parse(result);
        console.log('====================================');
        console.log(`data recieved:${JSON.stringify(result,null,2)}`);
        console.log('====================================');

        const datanormalized=normalize(result.listaTipos,SchemaTiposServico.resultadosTiposServico);

        console.log('====================================');
        console.log(`data recieved:${JSON.stringify(datanormalized,null,2)}`);
        console.log('====================================');
        dispatch(recieveDadosTipoServico(datanormalized));

    })
    .catch(error=>{
        dispatch(setcsmTipoServicoError(error));
    });
};