import {schema} from 'normalizr';

const dadosRecibosSchema= new schema.Entity('dadosRecibo');

const infoRecibo=new schema.Entity('recibo',{
    linhasRecibo:[dadosRecibosSchema]
},{idAttribute:'numerorecibo'});


const resultadosRecibos= new schema.Array(infoRecibo);
export const recibosSchema={
    resultadosRecibos,
    dadosRecibosSchema,
    infoRecibo
};