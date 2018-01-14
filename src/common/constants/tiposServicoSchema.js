import {schema} from 'normalizr';

const tipoServicoSchema= new schema.Entity('listaTipos');

const infoTipoServico= new schema.Entity('tipoServico',{},{idAttribute:'idServico'});

const resultadosTiposServico= new schema.Array(infoTipoServico);

export const SchemaTiposServico={
    resultadosTiposServico,
    infoTipoServico
};