import { bubble as Menu } from 'react-burger-menu';
import React, { Component } from 'react';

class Example extends Component {
  render () {
   return (
     <Menu right pageWrapId={ this.props.pageWrapId} outerContainerId={ this.props.outerContainerId} >
       <a id="Hjem" className="menu-item" href="/">Hjem</a>
       <a id="Om meg" className="menu-item" href="/about" >Om meg</a>
       <a id="ClientA" className="menu-item" href="/clienta">Bentheshealingterapi</a>
       <a id="Clientb" className="menu-item" href="/clientb">StabburetCatering</a>
       <a id="Clientc" className="menu-item" href="/clientc">RovikMC</a>
     </Menu>
   );
 }
}

export default Example;
