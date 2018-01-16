import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CmsButton from '../Containers/CsmButton';

class InfoFuncionario extends PureComponent{

    handleGoBack=()=>{
        this.props.exitInfo();
        
    }
    render(){
        const {dadosFuncionario}= this.props;
        return(
            <div className="containerInfoCliente">
                <Card style={{width:'400'}}>
                    <CardHeader title={`Informacao Cliente ${dadosFuncionario.nomeFuncionario}`}
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
                            <div>{`Numero Funcionario: ${dadosFuncionario.numeroFuncionario}`}</div>
                            <div>{`Nome Funcionario: ${dadosFuncionario.nomeFuncionario}`}</div>
                            <div>{`NIF Funcionario: ${dadosFuncionario.nif}`}</div>
                            <div>{`Contacto Funcionario: ${dadosFuncionario.email}`}></div>
                            <div>{`IBAN Funcionario: ${dadosFuncionario.iban}`}></div>
                            <div>{`Morada Funcionario: ${dadosFuncionario.rua}`}</div>
                            <div>{`Codigo Postal:${dadosFuncionario.codigopostal}`}</div>
                            <div>{`Cidade: ${dadosFuncionario.cidade}`}</div>
                            <div>{`Concelho: ${dadosFuncionario.concelho}`}</div>
                            <div>{`Distrito:${dadosFuncionario.distrito}`}</div>
                        </div>
                    </CardText>
                </Card>
            {/* <div className="row">
                <div>{`Informacao Funcionario`}</div>
                <div>
                    <div>{`Numero Funcionario: ${dadosFuncionario.numeroFuncionario}`}</div>
                    <div>{`Nome Funcionario: ${dadosFuncionario.nomeFuncionario}`}</div>
                    <div>{`NIF Funcionario: ${dadosFuncionario.nif}`}</div>
                    <div>{`Contacto Funcionario: ${dadosFuncionario.email}`}></div>
                    <div>{`IBAN Funcionario: ${dadosFuncionario.iban}`}></div>
                    <div>{`Morada Funcionario: ${dadosFuncionario.rua}`}</div>
                    <div>{`Codigo Postal:${dadosFuncionario.codigopostal}`}</div>
                    <div>{`Cidade: ${dadosFuncionario.cidade}`}</div>
                    <div>{`Concelho: ${dadosFuncionario.concelho}`}</div>
                    <div>{`Distrito:${dadosFuncionario.distrito}`}</div>
                </div>
            </div>
            <div className="row">
                <CmsButton key="btnInfoClienteExit"
                    iconInfo={"goback"} 
                    buttonText={"Retroceder"} 
                    clickAction={this.handleGoBack} 
                    hasHref={false} hasSvg={false}
                    isDisabled={false}/>
            </div> */}
        </div> 
        );
    }
}
InfoFuncionario.propTypes={
    dadosFuncionario:PropTypes.object,
    exitInfo:PropTypes.func.isRequired
};
export default InfoFuncionario;