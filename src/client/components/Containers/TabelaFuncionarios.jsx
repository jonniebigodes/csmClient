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
import InfoFuncionario from '../Presentational/InfoFuncionario';
class TabelaFuncionarios extends Component{

    constructor(props){
        super(props);
        this.state={
            isDetail:false,
            selectedItem:{}
        };
    }
    handleGoBack=()=>{
        const {goBackAction}= this.props;
        goBackAction('Funcionarios');
    }
    onRowSelectedHandler=(selectedRows)=>{
        console.log('====================================');
        console.log(`Selected Row:${selectedRows}`);
        console.log('====================================');
        const {listaFuncionarios}= this.props;
        let i=0;
        let selectedClient={};
        for (const item in listaFuncionarios){
            if (i==selectedRows){
                selectedClient=listaFuncionarios[item];
                this.setState({selectedItem:selectedClient,isDetail:true});
            }
        }
    }
    handleExitPreview=()=>{
        this.setState({isDetail:false});
    }
    render(){
        const {listaFuncionarios}= this.props;
        const {isDetail,selectedItem}= this.state;
        if (isDetail){
            return(<InfoFuncionario dadosFuncionario={selectedItem} exitInfo={this.handleExitPreview}/>);
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
                                    Listagem Funcionario
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn tooltip="Numero Funcionario">Numero</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Nome Funcionario">Nome</TableHeaderColumn>
                                <TableHeaderColumn tooltip="NIF Funcionario">NIF</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Email Funcionario">Email</TableHeaderColumn>
                                <TableHeaderColumn tooltip="IBAN Funcionario">IBAN</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Rua Funcionario">Rua</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Codigo Postal Funcionario">Codigo Postal</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Cidade Funcionario">Cidade</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Concelho Funcionario">Concelho</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Distrito Funcionario">Distrito</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            deselectOnClickaway
                            showRowHover
                            stripedRows>
                            {Object.keys(listaFuncionarios).map( (row, index) => (
                                <TableRow key={`trow_${index}`}>
                                    <TableRowColumn>{listaFuncionarios[row].numeroFuncionario}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].nomeFuncionario}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].nif}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].email}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].iban}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].rua}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].codigopostal}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].cidade}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].concelho}</TableRowColumn>
                                    <TableRowColumn>{listaFuncionarios[row].distrito}</TableRowColumn>
                                </TableRow>
                                ))
                            }
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={false}>
                        <TableRow>
                            <TableRowColumn tooltip="Numero Cliente">Numero</TableRowColumn>
                            <TableRowColumn tooltip="Nome Cliente">Nome</TableRowColumn>
                            <TableRowColumn tooltip="NIF Cliente">NIF</TableRowColumn>
                            <TableRowColumn tooltip="Email Cliente">Email</TableRowColumn>
                            <TableRowColumn tooltip="IBAN Cliente">IBAN</TableRowColumn>
                            <TableRowColumn tooltip="Rua Cliente">Rua</TableRowColumn>
                            <TableRowColumn tooltip="Codigo Postal Cliente">Codigo Postal</TableRowColumn>
                            <TableRowColumn tooltip="Cidade Cliente">Cidade</TableRowColumn>
                            <TableRowColumn tooltip="Concelho Cliente">Concelho</TableRowColumn>
                            <TableRowColumn tooltip="Distrito Cliente">Distrito</TableRowColumn>
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
                        <CmsButton key="btnFuncionariosExit"
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
TabelaFuncionarios.propTypes={
    listaFuncionarios:PropTypes.object,
    goBackAction:PropTypes.func.isRequired
};
export default TabelaFuncionarios;