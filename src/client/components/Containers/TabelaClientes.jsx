import React , {Component}from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

import PropTypes from 'prop-types';

import CmsButton from './CsmButton';
import InfoCliente from '../Presentational/InfoCliente';
class TabelaClientes extends Component{
    constructor(props){
        super(props);
        this.state={
            isDetail:false,
            selectedItem:{}
        };
    }
    onRowSelectedHandler=(selectedRows)=>{
        const {listaClientes}= this.props;
        let i=0;
        let selectedClient={};
        for (const item in listaClientes){
            if (i==selectedRows){
                selectedClient=listaClientes[item];
                this.setState({selectedItem:selectedClient,isDetail:true});
            }
        }
    }

    handleGoBack=()=>{
        const {goBackAction}= this.props;
        goBackAction('Clientes');
    }
    handleExitPreview=()=>{
        this.setState({isDetail:false});
    }
    render(){
        const {listaClientes}= this.props;
        const {isDetail,selectedItem}= this.state;
        if (isDetail){
            return(<InfoCliente dadosCliente={selectedItem} exitInfo={this.handleExitPreview}/>);
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
                                    Listagem Clientes
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn tooltip="Numero Cliente">Numero</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Nome Cliente">Nome</TableHeaderColumn>
                                <TableHeaderColumn tooltip="NIF Cliente">NIF</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Email Cliente">Email</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Rua Cliente">Rua</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Codigo Postal Cliente">Codigo Postal</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Cidade Cliente">Cidade</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Concelho Cliente">Concelho</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Distrito Cliente">Distrito</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            deselectOnClickaway
                            showRowHover
                            stripedRows>
                            {Object.keys(listaClientes).map( (row, index) => (
                                <TableRow key={`trow_${index}`}>
                                    <TableRowColumn>{listaClientes[row]._id}</TableRowColumn>
                                    <TableRowColumn>{listaClientes[row]._nome}</TableRowColumn>
                                    <TableRowColumn>{listaClientes[row]._nif}</TableRowColumn>
                                    <TableRowColumn>{listaClientes[row]._email}</TableRowColumn>
                                    <TableRowColumn>{listaClientes[row]._rua}</TableRowColumn>
                                    <TableRowColumn>{listaClientes[row]._codigopostal}</TableRowColumn>
                                    <TableRowColumn>{listaClientes[row]._cidade}</TableRowColumn>
                                    <TableRowColumn>{listaClientes[row]._concelho}</TableRowColumn>
                                    <TableRowColumn>{listaClientes[row]._distrito}</TableRowColumn>
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
                        <CmsButton key="btnClientesExit"
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

TabelaClientes.propTypes={
    listaClientes:PropTypes.object,
    goBackAction:PropTypes.func.isRequired
};
export default TabelaClientes;