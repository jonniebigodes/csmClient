import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CmsButton from '../Containers/CsmButton';

class InfoOcorrencia extends PureComponent{

    handleGoBack=()=>{
        this.props.exitInfo();
        
    }
    render(){
        const {dadosOcorrencia}= this.props;
        return(
            <div className="containerInfoCliente">
                <Card style={{width:'450'}}>
                    <CardHeader title={`Informacao Cliente ${dadosOcorrencia.numeroocorrencia}`}
                        actAsExpander
                        showExpandableButton/>
                    <CardActions>
                        <CmsButton key="btnInfoClienteExit"
                        iconInfo={"goback"} 
                        buttonText={"Retroceder"} 
                        clickAction={this.handleGoBack} 
                        hasHref={false} hasSvg={false}
                        isDisabled={false}/>
                    </CardActions>
                    <CardText expandable>
                        <div className="infoCardText">
                            <div>{`Numero Ocorrencia: ${dadosOcorrencia.numeroocorrencia}`}</div>
                            <div>{`Cliente: ${dadosOcorrencia.nomecliente}`}</div>
                            <div>{`Funcionario: ${dadosOcorrencia.nomefuncionario}`}</div>
                            <div>{`Data Inicial: ${dadosOcorrencia.datainicial}`}</div>
                            <div>{`Data Final: ${dadosOcorrencia.datafinal}`}</div>
                            <div>{`Finalizada: ${dadosOcorrencia.finalizado?"SIM":"NAO"}`}</div>
                            <div>{`Codigo Postal: ${dadosOcorrencia.codigopostal}`}</div>
                            <div>{`Endereco: ${dadosOcorrencia.rua}`}</div>
                            <div>{`Codigo Postal:${dadosOcorrencia.codigopostal}`}</div>
                            <div>{`Cidade: ${dadosOcorrencia.cidade}`}</div>
                            <div>{`Concelho: ${dadosOcorrencia.concelho}`}</div>
                            <div>{`Distrito: ${dadosOcorrencia.distrito}`}</div>
                            <div>{`Sumario: ${dadosOcorrencia.distrito}`}</div>
                        </div>
                    </CardText>
                </Card>
                 {/*<div className="row">
                    <div>{`Informacao Ocorrencia`}</div>
                    
                    <div>
                        <div>{`Numero Ocorrencia: ${dadosOcorrencia.numeroocorrencia}`}</div>
                        <div>{`Cliente: ${dadosOcorrencia.nomecliente}`}</div>
                        <div>{`Funcionario: ${dadosOcorrencia.nomefuncionario}`}</div>
                        <div>{`Data Inicial: ${dadosOcorrencia.datainicial}`}</div>
                        <div>{`Data Final: ${dadosOcorrencia.datafinal}`}</div>
                        <div>{`Finalizada: ${dadosOcorrencia.finalizado?"SIM":"NAO"}`}</div>
                        <div>{`Codigo Postal: ${dadosOcorrencia.codigopostal}`}</div>
                        <div>{`Endereco: ${dadosOcorrencia.rua}`}</div>
                        <div>{`Codigo Postal:${dadosOcorrencia.codigopostal}`}</div>
                        <div>{`Cidade: ${dadosOcorrencia.cidade}`}</div>
                        <div>{`Concelho: ${dadosOcorrencia.concelho}`}</div>
                        <div>{`Distrito: ${dadosOcorrencia.distrito}`}</div>
                        <div>{`Sumario: ${dadosOcorrencia.distrito}`}</div>
                    </div> 
                    
                </div>
                <div className="row">
                    <CmsButton key="btnInfoClienteExit"
                        iconInfo={"goback"} 
                        buttonText={"Retroceder"} 
                        clickAction={this.handleGoBack} 
                        hasHref={false} hasSvg={false}
                        isDisabled={false}/>
                </div>*/}
        </div> 
        );
    }
}
InfoOcorrencia.propTypes={
    dadosOcorrencia:PropTypes.object,
    exitInfo:PropTypes.func.isRequired
};
export default InfoOcorrencia;