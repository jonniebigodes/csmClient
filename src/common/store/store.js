// dev mode
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
//
// prod mode 
//import {createStore,combineReducers,applyMiddleware} from 'redux';
//
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import csmClientes from '../reducers/csmClientesAppReducer';
import csmFuncionarios from '../reducers/csmFuncionariosAppReducer';
import csmFaturas from '../reducers/csmFaturasAppReducer';
import csmOcorrencias from '../reducers/csmOcorrenciasAppReducer';
import csmRecibos from '../reducers/csmRecibosAppReducer';
import csmTiposServico from '../reducers/csmTiposServicoAppReducer';

// dev mode
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//


export default createStore(
    combineReducers({
       
        csmClientes,
        csmFaturas,
        csmFuncionarios,
        csmOcorrencias,
        csmRecibos,
        csmTiposServico
    }),
    {},
    composeEnhancers(
        applyMiddleware(thunk,promise())
    )
    
);
// prod mode
/* export default createStore(
    combineReducers({
        stocks,
        night,
        books,
        votes,
        pins
    }),
    {},
    applyMiddleware(thunk,promise())); */