import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CmsButton from '../Containers/CsmButton';
class InfoCliente extends PureComponent{

    handleGoBack=()=>{
        this.props.exitInfo();
        
    }
    render(){
        const {dadosCliente}=this.props;
        return(
            <div className="containerInfoCliente">
                <Card style={{width:'400'}}>
                    <CardHeader title={`Informacao Cliente ${dadosCliente._nome}`}
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
                            <div>{`Numero Cliente:${dadosCliente._id}`}</div>
                            <div>{`Nome Cliente:${dadosCliente._nome}`}</div>
                            <div>{`Contacto Cliente: ${dadosCliente._email}`}</div>
                            <div>{`Nif Cliente:${dadosCliente._nif}`}</div>
                            <div>{`Codigo Postal Cliente: ${dadosCliente._codigopostal}` }</div>
                            <div>{`Endereço Rua: ${dadosCliente._rua}`}</div>
                            <div>{`Cidade: ${dadosCliente._cidade}`}</div>
                            <div>{`Concelho: ${dadosCliente._concelho}`}</div>
                            <div>{`Distrito:${dadosCliente._distrito}`}</div>
                        </div>
                    </CardText>
                </Card>
                {/* <div className="row">
                    <div>
                        {`Informacao Cliente`}
                    </div>
                    <div className="">
                        <div>{`Numero Cliente:${dadosCliente._id}`}</div>
                        <div>{`Nome Cliente:${dadosCliente._nome}`}</div>
                        <div>{`Contacto Cliente: ${dadosCliente._email}`}</div>
                        <div>{`Nif Cliente:${dadosCliente._nif}`}</div>
                        <div>{`Codigo Postal Cliente: ${dadosCliente._codigopostal}` }</div>
                        <div>{`Endereço Rua: ${dadosCliente._rua}`}</div>
                        <div>{`Cidade: ${dadosCliente._cidade}`}</div>
                        <div>{`Concelho: ${dadosCliente._concelho}`}</div>
                        <div>{`Distrito${dadosCliente._distrito}`}</div>
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
InfoCliente.propTypes={
    dadosCliente:PropTypes.object,
    exitInfo:PropTypes.func.isRequired
};
export default InfoCliente;