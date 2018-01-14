import React from 'react';
import  PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const AppHeader=(props)=>{

    return (
        <AppBar title={props.AppTitle}
                showMenuIconButton/>  
    );
};
AppHeader.propTypes={
    AppTitle:PropTypes.string.isRequired
};
export default  AppHeader;

