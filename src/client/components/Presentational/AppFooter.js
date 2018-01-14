import React from 'react';
import PropTypes from 'prop-types';
const AppFooter=(props)=>{
    const {footertext}= props;
    return(
        <div className={"linksStocks voffset3"}>
                Made by Joao Cardoso l17719<br/>
            Github repository: <a className="footer-stocks" href="https://github.com/jonniebigodes/freecodecampdynamicwebapps" 
                target="_blank">CSM(Crime Scene Magicians) Client</a>
          </div>
    );
};
AppFooter.propTypes={
    footertext:PropTypes.string.isRequired
};
export default AppFooter;