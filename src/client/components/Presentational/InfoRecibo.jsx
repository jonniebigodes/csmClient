import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CmsButton from '../Containers/CsmButton';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
class InfoRecibo extends PureComponent{
    handleGoBack=()=>{
        this.props.exitInfo();
        
    }
    renderConteudoTabela=()=>{
        const {infoRecibo}= this.props;
        const listaLInhas= infoRecibo.dadosRecibo;
        let resultado=[];
        
        

        for (const item of listaLInhas){
           
            resultado.push(<TableRow key={`trow_${item.idservico}${item.valorServico}`}>
            resultado.push(<TableRowColumn>{item.idservico}</TableRowColumn>);
            resultado.push(<TableRowColumn>{item.descricaotiposervico}</TableRowColumn>);
            resultado.push(<TableRowColumn>{item.valorServico}</TableRowColumn>);
            resultado.push(<TableRowColumn>{item.valorIva}</TableRowColumn>);
            resultado.push(<TableRowColumn>{item.valorFinal}</TableRowColumn>);
            
            resultado.push(</TableRow>);
        }
        return resultado;
        
    }
    renderTable=()=>{
        
        return (
            <Table 
                selectable={false}
                multiSelectable={false}>
                <TableHeader displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn tooltip="Numero Servico">Numero</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Descricao Servico">Descricao</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Valor Servico">Valor Servico</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Valor Iva">Valor Iva</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Valor Final">Valor Final</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway
                    showRowHover
                    stripedRows>
                        {this.renderConteudoTabela()}
                </TableBody>
                <TableFooter
                    adjustForCheckbox={false}>
                        <TableRow>
                            <TableRowColumn tooltip="Numero Servico">Numero</TableRowColumn>
                            <TableRowColumn tooltip="Descricao Servico">Descricao</TableRowColumn>
                            <TableRowColumn tooltip="Valor Servico">Valor Servico</TableRowColumn>
                            <TableRowColumn tooltip="Valor Iva">Valor Iva</TableRowColumn>
                            <TableRowColumn tooltip="Valor Final">Valor Final</TableRowColumn>
                        </TableRow>
                        
                </TableFooter>
            </Table>
            
        );
    }
    render(){
        const {infoRecibo}= this.props;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="containerInfoCliente">
                        <div>{`Descricao Recibos`}</div>
                        <div>{`Numero: ${infoRecibo.numerorecibo}`}</div>
                        <div>{`Numero Fatura: ${infoRecibo.numerofatura}`}</div>
                        <div>{`Numero Cliente: ${infoRecibo.numerocliente}`}</div>
                        <div>{`Nome Cliente: ${infoRecibo.nomecliente}`}</div>
                        <div>{`Contacto: ${infoRecibo.contacto}`}</div>
                        <div>{`Numero Funcionario: ${infoRecibo.numerofuncionario}`}</div>
                        <div>{`Nome Funcionario: ${infoRecibo.nomefuncionario}`}</div>
                        <div>{`Morada:${infoRecibo.rua}`}</div>
                        <div>{`Codigo Postal: ${infoRecibo.codigopostal}`}</div>
                        <div>{`Cidade: ${infoRecibo.cidade}`}
                        </div>
                        <div>{`Concelho: ${infoRecibo.concelho}`}
                        </div>
                        <div>{`Distrito: ${infoRecibo.distrito}`}
                        </div>
                        <div>{`Valor Iva: ${infoRecibo.iva}`}
                        </div>
                        <div>{`Valor Sem Iva: ${infoRecibo.valorbruto}`}
                        </div>
                        <div>{`Valor FInal: ${infoRecibo.valor}`}</div>
                    </div>
                    
                    <div className="row">
                        {this.renderTable()}
                    </div>
                </div>
                <div className="row">
                    <div className="csmPosButton">
                        <CmsButton key="btnInfoClienteExit"
                            iconInfo={"goback"} 
                            buttonText={"Retroceder"} 
                            clickAction={this.handleGoBack} 
                            hasHref={false} hasSvg={false}
                            isDisabled={false}/>
                    </div>
                </div>
            </div>
        );
    }
}
InfoRecibo.propTypes={
    infoRecibo:PropTypes.object,
    exitInfo:PropTypes.func.isRequired
};
export default InfoRecibo;