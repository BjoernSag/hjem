import React, { Component } from 'react';
import '.././style.css';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from './responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from './responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from './responsive_utilities/phoneEvenSmaller_breakpoint';
import Header from './Header';

class ThirdComponent extends Component{
  constructor (){
    super();
    this.state = {
      backgroundcolor : "component thirdComponent",
    }
  }

  render(){

    var contactOpacityStyle = {
      opacity: '0.05',
      position: 'absolute',
      fontSize: '200px',
      left: '10%',
      top: '25%',
      letterSpacing: '30px',
    };


    var contactStyle = {
      position: 'absolute',
      top: '20%',
      left: '25%',
      width: '33%',
    };
    var contactStyleMobile = {
      position: 'absolute',
      top: '20%',
      left: '25%',
      width: '33%',
      fontSize: '25px'
    };
    var contactStyleSmallerMobile = {
      position: 'absolute',
      top: '25%',
      left: '20%',
      width: '33%',
      fontSize: '25px'
    };

    var followInfoStyle = {
      position: 'absolute',
      width: '25%',
      top: '45%',
      left: '55%',
    };

    var followInfoStyleMobile = {
      position: 'absolute',
      width: '25%',
      top: '45%',
      left: '55%',
      fontSize: '25px',
    };
    var followInfoStyleSmallerMobile = {
      position: 'absolute',
      width: '25%',
      top: '50%',
      left: '57%',
      fontSize: '25px',
    };

    var linkedinStyle = {
      color: 'white',
      textDecoration: 'underline',
      position: 'absolute',
      top: '65%',
      left: '60%',
    }

    var linkedinStyleMobile = {
      color: 'white',
      textDecoration: 'underline',
      position: 'absolute',
      top: '62%',
      left: '60%',
    }

    var linkedinStyleSmallerMobile = {
      color: 'white',
      textDecoration: 'underline',
      position: 'absolute',
      top: '73%',
      left: '60%',
    }

    var mailStyle = {
      color: 'white',
      textDecoration: 'underline',
      fontSize: '20px',
      maxWidth: '10%',
    }
    var mailStyleMobile = {
      color: 'black',
      textDecoration: 'underline',
      fontSize: '20px',
      maxWidth: '10%',
    }
    var linkedinStyleMobile = {
      color: 'white',
      textDecoration: 'underline',
      position: 'absolute',
      top: '62%',
      left: '60%',
    }
    var linkedinStyleEvenSmallerMobile = {
      color: 'black',
      textDecoration: 'underline',
      position: 'absolute',
      top: '73%',
      left: '60%',
    }
    var linkedinStyleEnMobile = {
      color: 'black',
      textDecoration: 'underline',
      position: 'absolute',
      top: '62%',
      left: '60%',
    }

    return (
      <div className="component thirdComponent">
      <DesktopBreakpoint>
      <Header />
        <h1 style={contactStyle}>Ta gjerne kontakt med meg på <a style={mailStyle}
          href="mailto:bjoern@bjoernsagstad.com">bjoern@bjoernsagstad.com</a></h1>
        <h1 style={followInfoStyle}> Eller på sosiale medier</h1>
        <a style={linkedinStyle}
          href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
          target="_blank">Linkedin</a>
      </DesktopBreakpoint>
      <TabletBreakpoint>
      <Header />
      <h1 style={contactStyle}>Ta gjerne kontakt med meg på <a style={mailStyle}
        href="mailto:bjoern@bjoernsagstad.com">bjoern@bjoernsagstad.com</a></h1>
      <h1 style={followInfoStyle}> Eller på sosiale medier</h1>
      <a style={linkedinStyle}
        href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
        target="_blank">Linkedin</a>
      </TabletBreakpoint>
      <PhoneBreakpoint>
      <Header />
      <h1 style={contactStyleMobile}>Ta gjerne kontakt med meg på <a style={mailStyle}
        href="mailto:bjoern@bjoernsagstad.com">bjoern@bjoernsagstad.com</a></h1>
      <h1 style={followInfoStyleMobile}> Eller på sosiale medier</h1>
      <a style={linkedinStyleMobile}
        href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
        target="_blank">Linkedin</a>
      </PhoneBreakpoint>
      <PhoneSmallerBreakpoint>
      <Header />
      <div className="thirdMobileComponent">
      <h1 style={contactStyleMobile}>Ta gjerne kontakt med meg på <a style={mailStyleMobile}
        href="mailto:bjoern@bjoernsagstad.com">mail</a></h1>
      <h1 style={followInfoStyleMobile}> Eller på sosiale medier</h1>
      <a style={linkedinStyleEnMobile}
        href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
        target="_blank">Linkedin</a>
      </div>
      </PhoneSmallerBreakpoint>
      <LandScapeBreakpoint>
      <Header />
      <h1 style={contactStyleMobile}>Ta gjerne kontakt med meg på <a style={mailStyle}
        href="mailto:bjoern@bjoernsagstad.com">mail</a></h1>
      <h1 style={followInfoStyleMobile}> Eller på sosiale medier</h1>
      <a style={linkedinStyleMobile}
        href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
        target="_blank">Linkedin</a>
      </LandScapeBreakpoint>
      <PhoneEvenSmallerBreakpoint>
      <Header />
      <div className="thirdMobileComponent">
      <h1 style={contactStyleSmallerMobile}>Ta gjerne kontakt med meg på <a style={mailStyleMobile}
        href="mailto:bjoern@bjoernsagstad.com">mail</a></h1>
      <h1 style={followInfoStyleSmallerMobile}> Eller på sosiale medier</h1>
      <a style={linkedinStyleEvenSmallerMobile}
        href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
        target="_blank">Linkedin</a>
      </div>
      </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default ThirdComponent;
