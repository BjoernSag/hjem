import React, { Component } from 'react';
import '../.././style.css';
import DesktopBreakpoint from '.././responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '.././responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '.././responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from '.././responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from '.././responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from '.././responsive_utilities/phoneEvenSmaller_breakpoint';

class ClientCFrontPage extends Component {
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
      <div className="clientCFrontPage">
      <h1 style={title}>RovikMC</h1>
      <h5 style={underTitleMobile}>Nettbutikk og storefront</h5>
      <img
        className="icon"
        src="https://img.icons8.com/color/480/000000/motorbike-helmet.png"
        alt="Motorcycle-helm"
        data-action="/ClientC"
      />
      <br />
      <br />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientc"
        target="_blank"
        style={underTitle}>Se mer
        </a>
        <br />
        <br />
        </center>
      </div>
      </DesktopBreakpoint>
      <TabletBreakpoint>
      <div className="clientCFrontPage">
      <h1 style={titleTablet}>RovikMC</h1>
      <h5 style={underTitleTablet}>Nettbutikk og storefront</h5>
      <img
        className="icon"
        src="https://img.icons8.com/color/480/000000/motorbike-helmet.png"
        alt="Motorcycle-helm"
        data-action="/ClientC"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientc"
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
        href="/clientc"
        target="_blank"
        style={underTitle}>

          <div className="clientCFrontPage">
          <h1 style={titleTablet}>RovikMC</h1>
          <h5 style={underTitleTablet}>Nettbutikk og storefront</h5>
          <img
            className="icon"
            src="https://img.icons8.com/color/480/000000/motorbike-helmet.png"
            alt="Motorcycle-helm"
            data-action="/ClientC"
          />
          <br />
          <center><a
            className="clientFrontPageSeMer"
            href="/clientc"
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
      <div className="thirdComponentMobile">
      <p style={tibit}>Design 3:</p>
      <h1 style={titleMobile}>RovikMC</h1>
      <h5 style={underTitleMobile}>Nettbutikk og storefront</h5>
      <img
        className="icon"
        src="https://img.icons8.com/color/480/000000/motorbike-helmet.png"
        alt="Motorcycle-helm"
        data-action="/ClientC"
      />
      <br />
      <br />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientc"
        target="_blank"
        style={underTitleMobile}>Se mer
        </a>
        </center>
      </div>
      </PhoneBreakpoint>
      <PhoneSmallerBreakpoint>
      <div className="thirdComponentMobile">
      <p style={tibit}>Design 3:</p>
      <h1 style={titleMobile}>RovikMC</h1>
      <h5 style={underTitleMobile}>Nettbutikk og storefront</h5>
      <img
        className="icon"
        src="https://img.icons8.com/color/480/000000/motorbike-helmet.png"
        alt="Motorcycle-helm"
        data-action="/ClientC"
      />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientc"
        target="_blank"
        style={underTitleMobile}>Se mer
        </a>
        </center>
      </div>
      </PhoneSmallerBreakpoint>
      <PhoneEvenSmallerBreakpoint>
      <div className="thirdComponentMobile">
      <p style={tibit}>Design 3:</p>
      <h1 style={titleMobile}>RovikMC</h1>
      <h5 style={underTitleMobile}>Nettbutikk og storefront</h5>
      <img
        className="icon"
        src="https://img.icons8.com/color/480/000000/motorbike-helmet.png"
        alt="Motorcycle-helm"
        data-action="/ClientC"
      />
      <br />
      <br />
      <center><a
        className="clientFrontPageSeMer"
        href="/clientc"
        target="_blank"
        style={underTitleMobile}>Se mer
        </a>
        </center>
      </div>
      </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default ClientCFrontPage;
