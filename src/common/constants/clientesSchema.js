import {schema} from 'normalizr';
const clienteSchema= new schema.Entity('listaClientes');

const infoClientes= new schema.Entity('cliente',{},{idAttribute:'_id'});

const resultadosClientes= new schema.Array(infoClientes);

export const SchemaClientes={
    resultadosClientes,
    infoClientes
};