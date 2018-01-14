import {schema} from 'normalizr';

const conteudoFatura= new schema.Entity('dadosFatura');
const infoFatura=new schema.Entity('fatura',{
    linhasFatura:[conteudoFatura]
},{idAttribute:'numerofatura'});


const resultadosFaturas= new schema.Array(infoFatura);
export const FaturasSchema={
    resultadosFaturas,
    conteudoFatura,
    infoFatura
};