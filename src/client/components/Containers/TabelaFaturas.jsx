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
  import InfoFatura from '../Presentational/InfoFatura';
  class TabelaFaturas extends Component{
      constructor(props){
          super(props);
          this.state={
              isDetail:false,
              selectedItem:{}
          };
      }
      onRowSelectedHandler=(selectedRows)=>{
        console.log('====================================');
        console.log(`Selected Row:${selectedRows}`);
        console.log('====================================');
        const {listaFaturas}= this.props;
        let i=0;
        let selectedClient={};
        for (const item in listaFaturas){
            if (i==selectedRows){
                selectedClient=listaFaturas[item];
                this.setState({selectedItem:selectedClient,isDetail:true});
            }
        }
    }
    handleGoBack=()=>{
        const {goBackAction}= this.props;
        goBackAction('Faturas');
    }
    handleExitPreview=()=>{
        this.setState({isDetail:false});
    }
    render(){
        const {listaFaturas}= this.props;
        const {isDetail,selectedItem}= this.state;
        if (isDetail){
            return(<InfoFatura informacaoConteudoFatura={selectedItem} exitInfo={this.handleExitPreview} />);
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
                        Listagem Faturas
                    </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Numero Fatura">Numero</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Numero Cliente">Numero Cliente</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Nome Cliente">Nome Cliente</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Rua Cliente">Endereco</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Contacto Cliente">Contacto</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Codigo Postal">Codigo Postal</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Cidade Cliente">Cidade</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Concelho Cliente">Concelho</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Distrito Cliente">Distrito</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Numero Funcionario">Funcionario</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Nome Funcionario">Funcionario</TableHeaderColumn>
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
                    {Object.keys(listaFaturas).map( (row, index) => (
                    <TableRow key={`trow_${index}`}>
                        <TableRowColumn>{listaFaturas[row].numerofatura}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].numerocliente}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].nomecliente}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].rua}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].contacto}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].codigopostal}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].cidade}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].concelho}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].distrito}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].numerofuncionario}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].nomefuncionario}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].iva}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].valorbruto}</TableRowColumn>
                        <TableRowColumn>{listaFaturas[row].valor}</TableRowColumn>
                    </TableRow>
                    ))
                }
                </TableBody>
                <TableFooter
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableRowColumn tooltip="Numero Fatura">Numero</TableRowColumn>
                        <TableRowColumn tooltip="Numero Cliente">Numero Cliente</TableRowColumn>
                        <TableRowColumn tooltip="Nome Cliente">Nome Cliente</TableRowColumn>
                        <TableRowColumn tooltip="Rua Cliente">Endereco Cliente</TableRowColumn>
                        <TableRowColumn tooltip="Contacto Cliente">Contacto Cliente</TableRowColumn>
                        <TableRowColumn tooltip="Codigo Postal">Codigo Postal</TableRowColumn>
                        <TableRowColumn tooltip="Cidade Cliente">Cidade</TableRowColumn>
                        <TableRowColumn tooltip="Concelho Cliente">Concelho</TableRowColumn>
                        <TableRowColumn tooltip="Distrito Cliente">Distrito</TableRowColumn>
                        <TableRowColumn tooltip="Numero Funcionario">Numero Funcionario</TableRowColumn>
                        <TableRowColumn tooltip="Nome Funcionario">Nome Funcionario</TableRowColumn>
                        <TableRowColumn tooltip="IVA">IVA</TableRowColumn>
                        <TableRowColumn tooltip="Valor Bruto">Valor Bruto</TableRowColumn>
                        <TableRowColumn tooltip="Valor Final">Valor Final</TableRowColumn>
                    </TableRow>
                    <TableRow>
                    <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                        Listagem Faturas
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
  TabelaFaturas.propTypes={
    listaFaturas:PropTypes.object,
    goBackAction:PropTypes.func.isRequired
};
export default TabelaFaturas;