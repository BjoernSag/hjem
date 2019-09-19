import React, { Component } from 'react';
import '../.././style.css';
import DesktopBreakpoint from '.././responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '.././responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '.././responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from '.././responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from '.././responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from '.././responsive_utilities/phoneEvenSmaller_breakpoint';

class ClientAFrontPage extends Component {
  render(){

    var title = {
      paddingTop: '20%',
      textAlign: 'center',
      color: 'black',
    }

    var titleMobile = {
      paddingTop: '35%',
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
      <div className="clientAFrontPage">
      <h1 style={title}>BenthesHealing</h1>
      <h5 style={underTitleMobile}>Timebestilling og informasjonsside</h5>
      <img
        className="icon"
        src="https://img.icons8.com/office/480/000000/spa-flower.png"
        alt="BenthesHealing"
        data-action="/ClientA"
      />
      <br />
      <br />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clienta"
        target="_blank"
        style={underTitle}>Se mer
        </a>
        <br />
        <br />
        </center>
      </div>
      </DesktopBreakpoint>
      <TabletBreakpoint>
      <div className="clientAFrontPage">
      <h1 style={titleTablet}>BenthesHealing</h1>
      <h5 style={underTitleTablet}>Timebestilling og informasjonsside</h5>
      <img
        className="icon"
        src="https://img.icons8.com/office/480/000000/spa-flower.png"
        alt="BenthesHealing"
        data-action="/ClientA"
      />
      <br />
      <br />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clienta"
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
        href="/clienta"
        target="_blank"
        style={underTitle}>
      <div className="clientAFrontPage">
      <h1 style={titleTablet}>BenthesHealing</h1>
      <h5 style={underTitleTablet}>Timebestilling og informasjonsside</h5>
      <img
        className="icon"
        src="https://img.icons8.com/office/480/000000/spa-flower.png"
        alt="BenthesHealing"
        data-action="/ClientA"
      />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clienta"
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
        <div className="secondComponentMobile">
        <p style={tibit}>Design 1:</p>
        <h1 style={titleMobile}>BenthesHealing</h1>
        <h5 style={underTitleMobile}>Timebestilling og informasjonsside</h5>
        <img
          className="icon"
          src="https://img.icons8.com/office/480/000000/spa-flower.png"
          alt="BenthesHealing"
          data-action="/ClientA"
        />
        <br />
        <br />
        <br />
        <br />
        <center><a
          className="clientFrontPageSeMer"
          href="/clienta"
          target="_blank"
          style={underTitleMobile}>Se mer
          </a>
          </center>
        </div>
      </PhoneBreakpoint>
      <PhoneSmallerBreakpoint>
      <div className="secondComponentMobile">
      <p style={tibit}>Design 1:</p>
      <h1 style={titleMobile}>BenthesHealing</h1>
      <h5 style={underTitleMobile}>Timebestilling og informasjonsside</h5>
      <img
        className="icon"
        src="https://img.icons8.com/office/480/000000/spa-flower.png"
        alt="BenthesHealing"
        data-action="/ClientA"
      />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clienta"
        target="_blank"
        style={underTitleMobile}>Se mer
        </a>
        </center>
        </div>
      </PhoneSmallerBreakpoint>
      <PhoneEvenSmallerBreakpoint>
      <div className="secondComponentMobile">
      <p style={tibit}>Design 1:</p>
      <h1 style={titleMobile}>BenthesHealing</h1>
      <h5 style={underTitleMobile}>Timebestilling og informasjonsside</h5>
      <img
        className="icon"
        src="https://img.icons8.com/office/480/000000/spa-flower.png"
        alt="BenthesHealing"
        data-action="/ClientA"
      />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clienta"
        target="_blank"
        style={underTitleMobile}>Se mer
        </a>
        </center>
        </div>
      </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default ClientAFrontPage;
