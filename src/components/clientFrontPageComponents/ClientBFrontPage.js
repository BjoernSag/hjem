import React, { Component } from 'react';
import '../.././style.css';
import DesktopBreakpoint from '.././responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '.././responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '.././responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from '.././responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from '.././responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from '.././responsive_utilities/phoneEvenSmaller_breakpoint';

class ClientBFrontPage extends Component {
  render(){
    var titleMobile = {
      paddingTop: '35%',
      textAlign: 'center',
      color: 'black',
    }
    var title = {
      paddingTop: '20%',
      textAlign: 'center',
      color: 'black',
    }
    var underTitleMobile = {
      textAlign: 'center',
      color: 'black',
    }
    var underTitle = {
      textAlign: 'center',
      color: 'black',
    }
    var titleTablet = {
      paddingTop: '40%',
      textAlign: 'center',
      color: 'black',
      fontSize: '26px',
    }
    var underTitleTablet = {
      textAlign: 'center',
      color: 'black',
      fontSize: '20px',
    }
    var tibit = {
      position: 'relative',
      top: '22%',
      left: '2%',
    }

    return (
      <div className="component">
      <DesktopBreakpoint>
      <div className="clientBFrontPage">
      <h1 style={title}>StabburetCatering</h1>
      <h5 style={underTitleMobile}>Catering til bedrift og privat</h5>
      <img
        className="icon"
        src="https://img.icons8.com/dusk/480/000000/deliver-food.png"
        alt="BenthesHealing"
        data-action="/ClientB"
      />
      <br />
      <br />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientb"
        target="_blank"
        style={underTitle}>Se mer
        </a>
        <br />
        <br />
        </center>
      </div>
      </DesktopBreakpoint>
      <TabletBreakpoint>
      <div className="clientBFrontPage">
      <h1 style={titleTablet}>StabburetCatering</h1>
      <h5 style={underTitleTablet}>Catering til bedrift og privat</h5>
      <img
        className="icon"
        src="https://img.icons8.com/dusk/480/000000/deliver-food.png"
        alt="BenthesHealing"
        data-action="/ClientB"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientb"
        target="_blank"
        style={underTitle}>Se mer
        </a>
        <br />
        <br />
        </center>
      </div>
      </TabletBreakpoint>
      <LandScapeBreakpoint>
      <a
        href="/clientb"
        target="_blank"
        style={underTitle}>
      <div className="clientBFrontPage">
      <h1 style={titleTablet}>StabburetCatering</h1>
      <h5 style={underTitleTablet}>Catering til bedrift og privat</h5>
      <img
        className="icon"
        src="https://img.icons8.com/dusk/480/000000/deliver-food.png"
        alt="BenthesHealing"
        data-action="/ClientB"
      />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientb"
        target="_blank"
        style={underTitle}>Se mer
        </a>
        <br />
        <br />
        </center>
      </div>
      </a>
      </LandScapeBreakpoint>
      <PhoneBreakpoint>
        <div className="firstComponentMobile">
        <p style={tibit}>Design 2:</p>
        <h1 style={titleMobile}>StabburetCatering</h1>
        <h5 style={underTitleMobile}>Catering til bedrift og privat</h5>
        <img
          className="icon"
          src="https://img.icons8.com/dusk/480/000000/deliver-food.png"
          alt="BenthesHealing"
          data-action="/ClientB"
        />
        <br />
        <br />
        <br />
        <br />
        <center><a
          className="clientFrontPageSeMer"
          href="/clientb"
          target="_blank"
          style={underTitleMobile}>Se mer
          </a>
          </center>
        </div>
      </PhoneBreakpoint>
      <PhoneSmallerBreakpoint>
      <div className="firstComponentMobile">
      <p style={tibit}>Design 2:</p>
      <h1 style={titleMobile}>StabburetCatering</h1>
      <h5 style={underTitleMobile}>Catering til bedrift og privat</h5>
      <img
        className="icon"
        src="https://img.icons8.com/dusk/480/000000/deliver-food.png"
        alt="BenthesHealing"
        data-action="/ClientB"
      />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientb"
        target="_blank"
        style={underTitleMobile}>Se mer
        </a>
        </center>
        </div>
      </PhoneSmallerBreakpoint>
      <PhoneEvenSmallerBreakpoint>
      <div className="firstComponentMobile">
      <p style={tibit}>Design 2:</p>
      <h1 style={titleMobile}>StabburetCatering</h1>
      <h5 style={underTitleMobile}>Catering til bedrift og privat</h5>
      <img
        className="icon"
        src="https://img.icons8.com/dusk/480/000000/deliver-food.png"
        alt="BenthesHealing"
        data-action="/ClientB"
      />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientb"
        target="_blank"
        style={underTitleMobile}>Se mer
        </a>
        </center>
        </div>
      </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default ClientBFrontPage;
