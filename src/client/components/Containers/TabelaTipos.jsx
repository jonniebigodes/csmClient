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

class TabelaClientes extends Component{
    constructor(props){
        super(props);
        
    }
    
    handleGoBack=()=>{
        const {goBackAction}= this.props;
        goBackAction('Servicos');
    }
    render(){
        const {listaServicos}= this.props;
        
        return(
            <div>
                <div className="row">
                    <Table
                        selectable
                        multiSelectable={false}>
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}>
                            
                            <TableRow>
                                <TableHeaderColumn tooltip="Numero">Numero</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Descricao">Descricao</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Valor">Valor</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            deselectOnClickaway
                            showRowHover
                            stripedRows>
                            {Object.keys(listaServicos).map( (row, index) => (
                                <TableRow key={`trow_${index}`}>
                                    <TableRowColumn>{listaServicos[row].idServico}</TableRowColumn>
                                    <TableRowColumn>{listaServicos[row].descricao}</TableRowColumn>
                                    <TableRowColumn>{listaServicos[row].valor}</TableRowColumn>
                                </TableRow>
                                ))
                            }
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={false}>
                        <TableRow>
                            <TableRowColumn tooltip="Numero">Numero</TableRowColumn>
                            <TableRowColumn tooltip="Descricao">Descricao</TableRowColumn>
                            <TableRowColumn tooltip="Valor">Valor</TableRowColumn>
                            
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
    listaServicos:PropTypes.object,
    goBackAction:PropTypes.func.isRequired
};
export default TabelaClientes;