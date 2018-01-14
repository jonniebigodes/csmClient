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

class InfoFatura extends PureComponent{
    handleGoBack=()=>{
        this.props.exitInfo();
        
    }
    renderConteudoTabela=()=>{
        const {informacaoConteudoFatura}= this.props;
        const listaLInhas= informacaoConteudoFatura.dadosFatura;
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
        const {informacaoConteudoFatura}= this.props;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="containerInfoCliente">
                        <div>{`Descricao Fatura`}</div>
                        <div>{`Numero Fatura: ${informacaoConteudoFatura.numerofatura}`}</div>
                        <div>{`Numero Cliente:${informacaoConteudoFatura.numerocliente}`}</div>
                        <div>{`Codigo Postal: ${informacaoConteudoFatura.codigopostal}`}</div>
                        <div>{`Cidade: ${informacaoConteudoFatura.cidade}`}</div>
                        <div>{`Concelho: ${informacaoConteudoFatura.concelho}`}</div>
                        <div>{`Distrito: ${informacaoConteudoFatura.distrito}`}</div>
                        <div> {`Nome Cliente: ${informacaoConteudoFatura.nomecliente}`}</div>
                        <div>{`Contacto Cliente: ${informacaoConteudoFatura.contacto}`}</div>
                        <div>{`Numero Funcionario: ${informacaoConteudoFatura.numerofuncionario}`}</div>
                        <div>{`Nome Funcionario: ${informacaoConteudoFatura.nomefuncionario}`}</div>
                        <div>{`Valor Iva: ${informacaoConteudoFatura.iva}`}</div>
                        <div>{`Valor Sem Iva: ${informacaoConteudoFatura.valorbruto}`}</div>
                        <div>{`Valor Final: ${informacaoConteudoFatura.valor}`}</div>
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
InfoFatura.propTypes={
    informacaoConteudoFatura:PropTypes.object,
    exitInfo:PropTypes.func.isRequired
};
export default InfoFatura;