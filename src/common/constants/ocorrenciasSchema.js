import {schema} from 'normalizr';
const ocorrenciaSchema= new schema.Entity('listaOcorrencias');

const infoOcorrencia= new schema.Entity('ocorrencia',{},{idAttribute:'numeroocorrencia'});
const resultadosOcorrencias= new schema.Array(infoOcorrencia);

export const SchemaOcorrencias={
    resultadosOcorrencias,
    infoOcorrencia
};