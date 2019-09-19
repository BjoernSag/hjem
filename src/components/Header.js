import React, { Component } from 'react';
import '.././style.css';

class Header extends React.Component {
   render() {

     var fixedHeader = {
       width: '100%',
       top: '0',
       fontSize : '18px',
     }
      return (
         <div style={fixedHeader}>
            <p>Få et gratis og uforpliktende forslag. Kontakt på bjoern@bjoernsagstad.com eller tlf: 98453145</p>
         </div>
      );
   }
}
export default Header;
