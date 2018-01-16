import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import PainelDashBoard from '../Presentational/painelDashBoard';
import AppHeader from '../Presentational/AppHeader';
import AppFooter from '../Presentational/AppFooter';
import TabelaClientes from './TabelaClientes';
import TabelaFaturas from './TabelaFaturas';
import TabelaFuncionarios from './TabelaFuncionarios';
import TabelaOcorrencias from './TabelaOcorrencias';
import TabelaRecibos from './TabelaRecibos';
import TabelaTipos from './TabelaTipos';

class CsmContainer extends Component{

    /**
     * construtor class
     * @param {*} props propriedades react e user defined para o componente
     */
    constructor(props){
        super(props);
        this.state={
            isViewClientes:false,
            isViewFaturas:false,
            isViewFuncionarios:false,
            isViewOcorrencias:false,
            isViewRecibos:false,
            isViewTipos:false,
            snackMessage:'',
            snackOpen:false
        };
    }
    onResetError=()=>{
        this.props.resetAppError();
    }
    /**
     * preload renderer
     */
    renderPreload(){
        return(
            <div className="preloadContainer">
                <div className="preloadText">
                    A obter a informacao necessaria...Aguarde
                </div>
                <div className="preloadText">
                    <CircularProgress size={80} thickness={5} />
                </div>
            </div>
        );
    }
    onPanelClick=value=>{
        switch (value) {
            case 'Clientes':
                this.setState({isViewClientes:true,isViewFaturas:false,isViewFuncionarios:false,isViewOcorrencias:false,isViewRecibos:false,isViewTipos:false});
                break;
            case 'Faturas':
                this.setState({isViewFaturas:true,isViewClientes:false,isViewFuncionarios:false,isViewOcorrencias:false,isViewRecibos:false,isViewTipos:false});
                break;
            case "Funcionarios":
                this.setState({isViewFaturas:false,isViewClientes:false,isViewFuncionarios:true,isViewOcorrencias:false,isViewRecibos:false,isViewTipos:false});
                break;
            case "Ocorrencias":
                this.setState({isViewFaturas:false,isViewClientes:false,isViewFuncionarios:false,isViewOcorrencias:true,isViewRecibos:false,isViewTipos:false});
                break;
            case "Recibos":
                this.setState({isViewFaturas:false,isViewClientes:false,isViewFuncionarios:false,isViewOcorrencias:false,isViewRecibos:true,isViewTipos:false});
                break;
            case "Servicos":
                this.setState({isViewFaturas:false,isViewClientes:false,isViewFuncionarios:false,isViewOcorrencias:false,isViewRecibos:false,isViewTipos:true});
                break;
            default:
                break;
        }
    }
    handleGoBack=value=>{
       
        switch (value) {
            case 'Clientes':
                this.setState({isViewClientes:false});
                break;
            case 'Faturas':
                this.setState({isViewFaturas:false});
                break;
            case "Funcionarios":
                this.setState({isViewFuncionarios:false});
                break;
            case "Ocorrencias":
                this.setState({isViewOcorrencias:false});
                break;
            case "Recibos":
                this.setState({isViewRecibos:false});
                break;
            case "Servicos":
                this.setState({isViewTipos:false});
                break;
            
            default:
                break;
        }
    }
    renderNormal(){
        const {numeroClientes,clientes,faturas,numeroFaturas,funcionarios,numeroFuncionarios,ocorrencias,numeroOcorrencias,recibos,numeroRecibos,tiposServico,numeroTiposServico}=this.props;
        const {isViewClientes,isViewFaturas,isViewFuncionarios,isViewOcorrencias,isViewRecibos,isViewTipos}=this.state;
        if(isViewClientes){
            return(<TabelaClientes listaClientes={clientes} goBackAction={this.handleGoBack}/>);
        }
        if (isViewFaturas){
            return (<TabelaFaturas listaFaturas={faturas} goBackAction={this.handleGoBack}/>);
        }
        if (isViewFuncionarios){
            return (<TabelaFuncionarios listaFuncionarios={funcionarios} goBackAction={this.handleGoBack}/>)
        }
        if (isViewOcorrencias){
            return(<TabelaOcorrencias listaOcorrencias={ocorrencias} goBackAction={this.handleGoBack}/>);
        }
        if (isViewRecibos){
            return(<TabelaRecibos listaRecibos={recibos} goBackAction={this.handleGoBack}/>);
        }
        if (isViewTipos){
            return (<TabelaTipos listaServicos={tiposServico} goBackAction={this.handleGoBack}/>);
        }
        return (
            <div className="containerInfoCsm">
                <PainelDashBoard key="painelDashClientes"
                    textoPainel={"Clientes"} dadosPainel={numeroClientes}
                    onClickAction={this.onPanelClick}/>
                <PainelDashBoard key="painelDashFaturas"
                    textoPainel={"Faturas"} dadosPainel={numeroFaturas}
                    onClickAction={this.onPanelClick}/>
                <PainelDashBoard key="painelDashFuncionarios"
                    textoPainel={"Funcionarios"} dadosPainel={numeroFuncionarios}
                    onClickAction={this.onPanelClick}/>
               
               <PainelDashBoard key="painelDashOcorrencias"
                    textoPainel={"Ocorrencias"} dadosPainel={numeroOcorrencias}
                    onClickAction={this.onPanelClick}/>
                <PainelDashBoard key="painelDashRecibos"
                    textoPainel={"Recibos"} dadosPainel={numeroRecibos}
                    onClickAction={this.onPanelClick}/>
                
                <PainelDashBoard key="painelDashTiposServico"
                    textoPainel={"Servicos"} dadosPainel={numeroTiposServico}
                    onClickAction={this.onPanelClick}/>
                
            </div>
        );
    }
    render(){
        const {isAppError,errorMessageApp,isSearching}= this.props;
        const actionsDialog=[
            <FlatButton key="dialogError"
                label="OK"
                primary
                onClick={this.onResetError}/>
        ];
        return (
            <div className="container-fluid" key="ContainerApp">
                <Dialog key="DialogoErro"
                    actions={actionsDialog}
                    modal={false}
                    open={isAppError}
                    onRequestClose={this.onResetError}>
                
                    <h3>Ups!!!!<br/> Aconteceu algo de errado, ou alguem fez alguma coisa de errado!<br/>Ver problema abaixo</h3>
                    <br/>
                    <h4>{errorMessageApp}</h4>
                </Dialog>
                <AppHeader key="header" AppTitle={"Crime Scene Magicians"}/>
                
                {isSearching?this.renderPreload():this.renderNormal()}
                <AppFooter key="footer=" footertext={"linkPins"}/>
                
            </div>
        );
    }

}
CsmContainer.propTypes={
    isSearching:PropTypes.bool.isRequired,
    isAppError:PropTypes.bool.isRequired,
    errorMessageApp:PropTypes.string.isRequired,
    clientes:PropTypes.object.isRequired,
    numeroClientes:PropTypes.number.isRequired,
    faturas:PropTypes.object.isRequired,
    numeroFaturas:PropTypes.number.isRequired,
    funcionarios:PropTypes.object.isRequired,
    numeroFuncionarios:PropTypes.number.isRequired,
    ocorrencias:PropTypes.object.isRequired,
    numeroOcorrencias:PropTypes.number.isRequired,
    recibos:PropTypes.object.isRequired,
    numeroRecibos:PropTypes.number.isRequired,
    tiposServico:PropTypes.object.isRequired,
    numeroTiposServico:PropTypes.number.isRequired,
    resetAppError:PropTypes.func.isRequired
};
export default CsmContainer;