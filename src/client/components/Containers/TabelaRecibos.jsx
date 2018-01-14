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
import InfoRecibo from '../Presentational/InfoRecibo';

class TabelaRecibos extends Component{
    constructor(props){
        super(props);
        this.state={
            isDetail:false,
            selectedRecibo:{}
        };
    }
    handleGoBack=()=>{
        const {goBackAction}= this.props;
        goBackAction('Recibos');
    }
    onRowSelectedHandler=(selectedRows)=>{
        
        const {listaRecibos}= this.props;
        let i=0;
        let selectedItem={};
        for (const item in listaRecibos){
            if (i==selectedRows){
                console.log('====================================');
                console.log(`Selected Row:${i}\n ${JSON.stringify(item,null,2)}`);
                console.log('====================================');
                selectedItem=listaRecibos[item];
                console.log('====================================');
                console.log(`SELECTED REC:${JSON.stringify(selectedItem,null,2)}`);
                console.log('====================================');
                this.setState({isDetail:true,selectedRecibo:selectedItem});
            }
        }
        
    }
    handleExitPreview=()=>{
        this.setState({isDetail:false});
    }
    render(){
        const {listaRecibos}= this.props;
        const {isDetail,selectedRecibo}= this.state;
         if (isDetail){
            return(<InfoRecibo infoRecibo={selectedRecibo} exitInfo={this.handleExitPreview}/>);
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
                        Listagem Recibos
                    </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Numero Recibo">Numero</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Numero Fatura">Fatura</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Numero Cliente">Num. Cliente</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Nome Cliente">Cliente</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Contacto Cliente">Contacto</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Numero Funcionario">ID Funcionario</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Nome Funcionario">Funcionario</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Rua">Rua</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Codigo Postal">Cod. Postal</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Cidade Cliente">Cidade</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Concelho Cliente">Concelho</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Distrito Cliente">Distrito</TableHeaderColumn>
                        <TableHeaderColumn tooltip="IVA">IVA</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Valor Bruto">Valor Bruto</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Valor Final">Valor Final</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway
                    showRowHover
                    stripedRows>
                    {Object.keys(listaRecibos).map( (row, index) => (
                    <TableRow key={`trow_${index}`}>
                        <TableRowColumn>{listaRecibos[row].numerorecibo}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].numerofatura}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].numerocliente}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].nomecliente}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].contacto}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].numerofuncionario}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].nomefuncionario}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].rua}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].codigopostal}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].cidade}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].concelho}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].distrito}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].iva}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].valorbruto}</TableRowColumn>
                        <TableRowColumn>{listaRecibos[row].valor}</TableRowColumn>
                    </TableRow>
                    ))
                }
                </TableBody>
                <TableFooter
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableRowColumn tooltip="Numero Recibo">Numero</TableRowColumn>
                        <TableRowColumn tooltip="Numero Fatura">Fatura</TableRowColumn>
                        <TableRowColumn tooltip="Numero Cliente">Num. Cliente</TableRowColumn>
                        <TableRowColumn tooltip="Nome Cliente">Cliente</TableRowColumn>
                        <TableRowColumn tooltip="Contacto Cliente">Contacto</TableRowColumn>
                        <TableRowColumn tooltip="Numero Funcionario">ID Funcionario</TableRowColumn>
                        <TableRowColumn tooltip="Nome Funcionario">Funcionario</TableRowColumn>
                        <TableRowColumn tooltip="Rua">Rua</TableRowColumn>
                        <TableRowColumn tooltip="Codigo Postal">Cod. Postal</TableRowColumn>
                        <TableRowColumn tooltip="Cidade Cliente">Cidade</TableRowColumn>
                        <TableRowColumn tooltip="Concelho Cliente">Concelho</TableRowColumn>
                        <TableRowColumn tooltip="Distrito Cliente">Distrito</TableRowColumn>
                        <TableRowColumn tooltip="IVA">IVA</TableRowColumn>
                        <TableRowColumn tooltip="Valor Bruto">Valor Bruto</TableRowColumn>
                        <TableRowColumn tooltip="Valor Final">Valor Final</TableRowColumn>
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
                        <CmsButton key="btnFaturasExit"
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
TabelaRecibos.propTypes={
    listaRecibos:PropTypes.object,
    goBackAction:PropTypes.func.isRequired
};
export default TabelaRecibos;