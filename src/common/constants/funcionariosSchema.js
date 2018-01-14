import {schema} from 'normalizr';
const funcionarioSchema= new schema.Entity('listaFuncionarios');
const infoFuncionario= new schema.Entity('funcionario',{},{idAttribute:'numeroFuncionario'});

const resultadosFuncionarios= new schema.Array(infoFuncionario);

export const SchemaFuncionarios={
    resultadosFuncionarios,
    infoFuncionario
};