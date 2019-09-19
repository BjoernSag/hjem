import React, { Component } from 'react';
import '.././style.css';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from './responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from './responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from './responsive_utilities/phoneEvenSmaller_breakpoint';

class Coming extends Component{
  render(){

    var centered = {
      position: 'relative',
      textAlign: 'center',
      top: '20%'
    }

    return (
      <div className="minorSiteBackground">
      <DesktopBreakpoint>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 style={centered}>Siden kommer snart</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </DesktopBreakpoint>
      <TabletBreakpoint>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={centered}>Siden kommer snart</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </TabletBreakpoint>
      <PhoneBreakpoint>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={centered}>Siden kommer snart</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </PhoneBreakpoint>
      <PhoneSmallerBreakpoint>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={centered}>Siden kommer snart</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </PhoneSmallerBreakpoint>
      <LandScapeBreakpoint>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={centered}>Siden kommer snart</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </LandScapeBreakpoint>
      <PhoneEvenSmallerBreakpoint>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={centered}>Siden kommer snart</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default Coming;
