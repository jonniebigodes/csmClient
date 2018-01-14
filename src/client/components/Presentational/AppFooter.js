import React from 'react';
import PropTypes from 'prop-types';
import '../../../Assets/stylesheets/base.scss';
const AppFooter=()=>{
    
    return(
        <div className={"linksStocks voffset3"}>
                Made by Joao Cardoso l17719<br/>
            Github repository: <a className="footer-stocks" href="https://github.com/jonniebigodes/csmClient" 
                target="_blank">CSM(Crime Scene Magicians) Client</a>
          </div>
    );
};
AppFooter.propTypes={
    footertext:PropTypes.string.isRequired
};
export default AppFooter;