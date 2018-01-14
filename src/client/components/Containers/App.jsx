import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {dynamicThemes} from '../../../Assets/styles/challengesThemes';
import {
  fetchClientes
} from '../../../common/actions/csmClienteActions';
import{fetchFuncionarios} from '../../../common/actions/csmFuncionariosActions';
import {fetchFaturas} from '../../../common/actions/csmFaturasActions';
import {fetchRecibos} from '../../../common/actions/csmRecibosActions';
import {fetchOcorrencias} from '../../../common/actions/csmOcorrenciasActions';

import {fetchServicos} from '../../../common/actions/csmTiposServico';
import CsmContainer from './CsmContainer';
import '../../../Assets/stylesheets/base.scss';
/**
 * base component for the app
 */
class App extends Component {

 
 componentDidMount=()=>{
  this.props.getClientes();
  this.props.getfuncionarios();
  this.props.getFaturas();
  this.props.getRecibos();
  this.props.getOcorrencias();
  this.props.getServicos();
 }
  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(dynamicThemes.votesTheme)}>
                <CsmContainer 
                    isAppError={false} 
                    errorMessageApp={''}
                    resetErrorApp={this.handleResetError}
                    isSearching={this.props.obtemClientes}
                    clientes={this.props.dadosClientes}
                    numeroClientes={this.props.resultadosClientes.length}
                    faturas={this.props.dadosFaturas}
                    numeroFaturas={this.props.resultadosFaturas.length}
                    funcionarios={this.props.dadosFuncionarios}
                    numeroFuncionarios={this.props.resultadosFuncionarios.length}
                    ocorrencias={this.props.dadosOcorrencias}
                    numeroOcorrencias={this.props.resultadosOcorrencias.length}
                    recibos={this.props.dadosRecibos}
                    numeroRecibos={this.props.resultadosRecibos.length}
                    tiposServico={this.props.dadosTipoServico}
                    numeroTiposServico={this.props.resultadosTipoServico.length}/>
            </MuiThemeProvider>
    );
  }
}
const mapStateToProps=state=>{
  return{
    obtemClientes:state.csmClientes.isSearchingClientes,
    dadosClientes:state.csmClientes.entities,
    resultadosClientes:state.csmClientes.results,
    dadosFaturas:state.csmFaturas.entitiesFaturas,
    resultadosFaturas:state.csmFaturas.resultsFaturas,
    dadosFuncionarios:state.csmFuncionarios.entitiesFuncionarios,
    resultadosFuncionarios:state.csmFuncionarios.resultsFuncionarios,
    dadosOcorrencias:state.csmOcorrencias.entitiesOcorrencias,
    resultadosOcorrencias:state.csmOcorrencias.resultsOcorrencias,
    dadosRecibos:state.csmRecibos.entitiesRecibos,
    resultadosRecibos:state.csmRecibos.resultsRecibos,
    dadosTipoServico:state.csmTiposServico.entitiesTiposServico,
    resultadosTipoServico:state.csmTiposServico.resultsTiposServico
  };
};
const mapDispatchToProps=dispatch=>{
  return {
    getClientes:()=>{
      dispatch(fetchClientes());
    },
    getfuncionarios:()=>{
      dispatch(fetchFuncionarios());
    },
    getFaturas:()=>{
      dispatch(fetchFaturas());
    },
    getRecibos:()=>{
      dispatch(fetchRecibos());
    },
    getOcorrencias:()=>{
      dispatch(fetchOcorrencias());
    },
    getServicos:()=>{
      dispatch(fetchServicos());
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (App);