import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {dynamicThemes} from '../../../Assets/styles/challengesThemes';
import {fetchClientes,resetsetcsmClienteError} from '../../../common/actions/csmClienteActions';
import{fetchFuncionarios,resetsetcsmFuncionarioError} from '../../../common/actions/csmFuncionariosActions';
import {fetchFaturas,resetsetcmsFaturasError} from '../../../common/actions/csmFaturasActions';
import {fetchRecibos,resetsetcsmReciboError} from '../../../common/actions/csmRecibosActions';
import {fetchOcorrencias,resetsetcsmOcorrenciaError} from '../../../common/actions/csmOcorrenciasActions';
import {fetchServicos,resetsetcsmTipoServicoError} from '../../../common/actions/csmTiposServico';
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

  isOnError(){
    const {isClientesError,isFaturasError,isFuncionariosError,isOcorrenciasError,isRecibosOnError,isTiposServicoError}= this.props;
    if (isClientesError|| isFaturasError||isFuncionariosError||isOcorrenciasError||isRecibosOnError||isTiposServicoError){
      return true;
    }
    return false;
  }
  handleResetError=()=>{
    const {resetErrorClientes,resetErrorFaturas,resetErrorFuncionarios,resetErrorOcorrencias,resetErrorRecibos,resetErrorTipos}= this.props;
    resetErrorClientes();
    resetErrorFaturas();
    resetErrorFuncionarios();
    resetErrorOcorrencias();
    resetErrorRecibos();
    resetErrorTipos();
  }
  render() {
    const isAppOnError=this.isOnError();
    return(
      
      <MuiThemeProvider muiTheme={getMuiTheme(dynamicThemes.votesTheme)}>
                <CsmContainer 
                    isAppError={isAppOnError} 
                    errorMessageApp={''}
                    resetAppError={this.handleResetError}
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
    isClientesError:state.csmClientes.onError,
    dadosFaturas:state.csmFaturas.entitiesFaturas,
    resultadosFaturas:state.csmFaturas.resultsFaturas,
    isFaturasError:state.csmFaturas.onError,
    dadosFuncionarios:state.csmFuncionarios.entitiesFuncionarios,
    resultadosFuncionarios:state.csmFuncionarios.resultsFuncionarios,
    isFuncionariosError:state.csmFuncionarios.onError,
    dadosOcorrencias:state.csmOcorrencias.entitiesOcorrencias,
    resultadosOcorrencias:state.csmOcorrencias.resultsOcorrencias,
    isOcorrenciasError:state.csmOcorrencias.onError,
    dadosRecibos:state.csmRecibos.entitiesRecibos,
    resultadosRecibos:state.csmRecibos.resultsRecibos,
    isRecibosOnError:state.csmRecibos.onError,
    dadosTipoServico:state.csmTiposServico.entitiesTiposServico,
    resultadosTipoServico:state.csmTiposServico.resultsTiposServico,
    isTiposServicoError:state.csmTiposServico.onError
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
    },
    resetErrorClientes:()=>{
      dispatch(resetsetcsmClienteError());
    },
    resetErrorFaturas:()=>{
      dispatch(resetsetcmsFaturasError());
    },
    resetErrorFuncionarios:()=>{
      dispatch(resetsetcsmFuncionarioError());
    },
    resetErrorOcorrencias:()=>{
      dispatch(resetsetcsmOcorrenciaError());
    },resetErrorRecibos:()=>{
      dispatch(resetsetcsmReciboError());
    },
    resetErrorTipos:()=>{
      dispatch(resetsetcsmTipoServicoError());
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (App);