import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class PainelDashBoard extends PureComponent{
    
    dashBoardClickHandler=()=>{
        const {onClickAction,textoPainel}=this.props;
        onClickAction(textoPainel);
    }
    render(){
        const{textoPainel,dadosPainel}= this.props;
        
        return(
            <div className="panel panel-success" onClick={this.dashBoardClickHandler}>
                <div className="panel-heading">
                    {textoPainel}
                </div>
                <div className="panel-body">
                    <div>
                        Numero de Elementos Registados: {dadosPainel}
                    </div>
                </div>
        </div>
        );
    }
}

PainelDashBoard.propTypes={
    textoPainel:PropTypes.string.isRequired,
    dadosPainel:PropTypes.number.isRequired,
    onClickAction:PropTypes.func.isRequired
};
export default PainelDashBoard;
