import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import CmsButton from './CsmButton';
import InfoOcorrencia from '../Presentational/InfoOcorrencia';
class TabelaOcorrencias extends Component{
    constructor(props){
        super(props);
        this.state={
            isDetail:false,
            selectedItem:{}
        };

    }
    handleGoBack=()=>{
        const {goBackAction}= this.props;
        goBackAction('Ocorrencias');
    }
    onRowSelectedHandler=(selectedRows)=>{
        console.log('====================================');
        console.log(`Selected Row:${selectedRows}`);
        console.log('====================================');
        const {listaOcorrencias}= this.props;
        let i=0;
        let selectedClient={};
        for (const item in listaOcorrencias){
            if (i==selectedRows){
                selectedClient=listaOcorrencias[item];
                this.setState({selectedItem:selectedClient,isDetail:true});
            }
        }
    }
    handleExitPreview=()=>{
        this.setState({isDetail:false});
    }
    render(){
        const {listaOcorrencias}= this.props;
        const {isDetail,selectedItem}= this.state;
        if (isDetail){
            return(<InfoOcorrencia dadosOcorrencia={selectedItem} exitInfo={this.handleExitPreview} />);
        }
        return(
            <div>
                <div className="row">
                    <Table
                        onRowSelection={this.onRowSelectedHandler}
                        selectable
                        multiSelectable={false}>
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn colSpan="3" tooltip="Listagem Clientes" style={{textAlign: 'center'}}>
                                    Listagem Ocorrencias
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn tooltip="Numero Ocorrencia">Numero</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Nome Cliente">Nome Cliente</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Nome Funcionario">Funcionario</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Data Inicial">Data Inicial</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Data Inicial">Data Inicial</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Finalizado">Finalizado</TableHeaderColumn>
                                
                                <TableHeaderColumn tooltip="Endereco">Rua</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Codigo Postal">Codigo Postal</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Cidade">Cidade</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Concelho">Concelho</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Distrito">Distrito</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Sumario">sumario</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            deselectOnClickaway
                            showRowHover
                            stripedRows>
                            {Object.keys(listaOcorrencias).map( (row, index) => (
                                <TableRow key={`trow_${index}`}>
                                    <TableRowColumn>{listaOcorrencias[row].numeroocorrencia}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].nomecliente}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].nomefuncionario}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].datainicial}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].datainicial}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].finalizado?"SIM":"NAO"}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].rua}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].codigopostal}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].cidade}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].concelho}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].distrito}</TableRowColumn>
                                    <TableRowColumn>{listaOcorrencias[row].sumario}</TableRowColumn>
                                </TableRow>
                                ))
                            }
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={false}>
                        <TableRow>
                            <TableRowColumn tooltip="Numero Ocorrencia">Numero</TableRowColumn>
                            <TableRowColumn tooltip="Nome Cliente">Nome Cliente</TableRowColumn>
                            <TableRowColumn tooltip="Nome Funcionario">Funcionario</TableRowColumn>
                            <TableRowColumn tooltip="Data Inicial">Data Inicial</TableRowColumn>
                            <TableRowColumn tooltip="Data Inicial">Data Inicial</TableRowColumn>
                            <TableRowColumn tooltip="Finalizado">Finalizado</TableRowColumn>
                            <TableRowColumn tooltip="Endereco">Rua</TableRowColumn>
                            <TableRowColumn tooltip="Codigo Postal">Codigo Postal</TableRowColumn>
                            <TableRowColumn tooltip="Cidade">Cidade</TableRowColumn>
                            <TableRowColumn tooltip="Concelho">Concelho</TableRowColumn>
                            <TableRowColumn tooltip="Distrito">Distrito</TableRowColumn>
                            <TableRowColumn tooltip="Sumario">sumario</TableRowColumn>
                        </TableRow>
                        <TableRow>
                        <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                            Listagem Clientes
                        </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
                </div>
                <div className="row">
                   <div className="csmPosButton">
                    <CmsButton key="btnOcorrenciasExit"
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
TabelaOcorrencias.propTypes={

    listaOcorrencias:PropTypes.object,
    goBackAction:PropTypes.func.isRequired
};
export default TabelaOcorrencias;
