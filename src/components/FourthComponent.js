import React, { Component } from 'react';
//import "animate.css/animate.min.css";
//import ScrollAnimation from 'react-animate-on-scroll';
import '.././style.css';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from './responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from './responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from './responsive_utilities/phoneEvenSmaller_breakpoint';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class SecondComponent extends Component{
//function SecondComponent(props){
  constructor (){
    super();
    this.state = {
      backgroundcolor : "component fourthComponent",
    }
    this.simpleContent = this.simpleContent.bind(this);
    this.shopContent = this.shopContent.bind(this);
    this.advancedContent = this.advancedContent.bind(this);
  }

  simpleContent = () => {
    return  <ul>
      <li>Wordpress implementasjon</li>
      <li>Responsivt design - Nydelig nettside på PC, Tablet og Mobil</li>
      <li>Brukervennlighet</li>
      <li>Enkel online redigeringsmuligheter for dere</li>
      <li>Oversiktlig navigering</li>
    </ul>
  }
  shopContent = () => {
    return <ul>
              <li>Wordpress implementasjon</li>
              <li>Responsivt design - Nydelig nettside på PC, Tablet og Mobil</li>
              <li>Brukervennlighet</li>
              <li>Enkel online redigeringsmuligheter for dere</li>
              <li>Oversiktlig navigering</li>
              <li>Nettbutikk implementasjon</li>
              <li>Synlighet i Google - SEO-optimalisering</li>
              <li>Google analytics</li>
              <li>Følger GDPR retningslinjer</li>
            </ul>
  }

  advancedContent = () => {
    return <ul>
      <li>Wordpress implementasjon</li>
      <li>Responsivt design - Nydelig nettside på PC, Tablet og Mobil</li>
      <li>Brukervennlighet</li>
      <li>Enkel online redigeringsmuligheter for dere</li>
      <li>Oversiktlig navigering</li>
      <li>Nettbutikk implementasjon</li>
      <li>Synlighet i Google - SEO-optimalisering</li>
      <li>Google analytics</li>
      <li>Følger GDPR retningslinjer</li>
      <li>Avansert funksjonalitet</li>

    </ul>
  }

  render(){

    var contactOpacityStyle = {
      opacity: '0.05',
      position: 'absolute',
      fontSize: '180px',
      left: '30%',
      top: '25%',
      letterSpacing: '40px',
    };

    var firstColumn = {
      maxWidth: '25%',
      top: '-16%',
      left: '2%',
      position: 'relative',
    };
    var secondColumn = {
      maxWidth: '25%',
      top: '-16%',
      left: '7%',
      position: 'relative',
    };
    var thirdColumn = {
      maxWidth: '25%',
      top: '-16%',
      left: '14%',
      position: 'relative',
    };

    var titleStyle = {
      position: 'relative',
      top: '20%',
      fontSize: '30px',
    };

    var titleStyleMobile = {
      position: 'relative',
      top: '5%',
      fontSize: '30px',
    };
    var includingStyle = {
      position: 'relative',
      top: '20%',
      left: '0%',
      fontSize: '16px',
    };
    var includingStyleMobile = {
      position: 'relative',
      top: '5%',
      left: '0%',
      fontSize: '16px',
    };


    var textStyle = {
      position: 'relative',
      top: '20%',
      left: '-10%',
      fontSize: '12px',
      lineHeight: '20px',
    };
    var textStyleMobile = {
      position: 'relative',
      top: '5%',
      left: '-10%',
      fontSize: '12px',
      lineHeight: '20px',
    };


    var readMoreButtonStyle = {
      position: 'absolute',
      top: '85%',
      left: '4%',
    };

    var readMoreButtonStyleMobile = {
      position: 'absolute',
      top: '60%',
      left: '4%',
    };
    var readMoreButtonStyleMobileSmaller = {
      position: 'absolute',
      top: '120%',
      left: '38%',
    };

    var readMoreButtonStyleMobileLandscape = {
      position: 'absolute',
      top: '45%',
      left: '115%',
    }

    var lowerText = {
      position: 'absolute',
      top: '80%',
      left: '2%',
      fontSize: '12px',
    }

    var prisMobileStyle = {
      position: 'relative',
      top: '15%',
      left: '3%',
      fontSize:'14px',
    }
    var prisMobileStyleLandscape = {
      position: 'relative',
      left: '2%',
    }
    var lowerTextMobile = {
      position: 'absolute',
      top: '88%',
      fontSize: '12px',
      left:'3%'
    }

    var linkColor = {
      color: '#6F2232',
    }


    return (
      <div className={this.state.backgroundcolor}>
        <DesktopBreakpoint>
          <h1 style={contactOpacityStyle}>Pris</h1>
          <div style={firstColumn}>
            <h1 style={titleStyle}><strong>Enkel løsning</strong></h1>
            <h4 style={includingStyle}>Pris starter på 5.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.simpleContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyle}>
              <a href="/ClientA" target="_blank">Se eksempel</a>
            </button>
          </div>
          <div style={secondColumn}>
            <h1 style={titleStyle}><strong>Nettbutikk</strong></h1>
            <h4 style={includingStyle}>Pris starter på 8.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.shopContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyle}>
              <a href="/ClientB" target="_blank">Se eksempel</a>
            </button>
          </div>
          <div style={thirdColumn}>
            <h1 style={titleStyle}><strong>Avansert løsning</strong></h1>
            <h4 style={includingStyle}>Pris starter på 12.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.advancedContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyle}>
              <a href="/ClientC" target="_blank">Se eksempel</a>
            </button>
          </div>
          <h5 style={lowerText}>Vi hjelper med domeneregistrering og oppsett av e-post adresse slik at dere
          raskest mulig kan ta nettsiden i bruk</h5>
            <p className="iconCredit"><a href="https://icons8.com/" target="_blank">All icons are by Icons8</a></p>

        </DesktopBreakpoint>
        <TabletBreakpoint>
        <h1 style={contactOpacityStyle}>Pris</h1>
        <div style={firstColumn}>
          <h1 style={titleStyle}><strong>Enkel løsning</strong></h1>
          <h4 style={includingStyle}>Pris starter på 5.000.-eks MVA og inkluderer:</h4>
          <h5 style={textStyle}>
            {this.simpleContent()}
          </h5>
          <button className="aboutMeButton" style={readMoreButtonStyle}>
            <a href="/ClientA" target="_blank">Se eksempel</a>
          </button>
        </div>
        <div style={secondColumn}>
          <h1 style={titleStyle}><strong>Nettbutikk</strong></h1>
          <h4 style={includingStyle}>Pris starter på 8.000.-eks MVA og inkluderer:</h4>
          <h5 style={textStyle}>
            {this.shopContent()}
          </h5>
          <button className="aboutMeButton" style={readMoreButtonStyle}>
            <a href="/ClientB" target="_blank">Se eksempel</a>
          </button>
        </div>
        <div style={thirdColumn}>
          <h1 style={titleStyle}><strong>Avansert løsning</strong></h1>
          <h4 style={includingStyle}>Pris starter på 12.000.-eks MVA og inkluderer:</h4>
          <h5 style={textStyle}>
            {this.advancedContent()}
          </h5>
          <button className="aboutMeButton" style={readMoreButtonStyle}>
            <a href="/ClientC" target="_blank">Se eksempel</a>
          </button>
        </div>
        <h5 style={lowerText}>Vi hjelper med domeneregistrering og oppsett av e-post adresse slik at dere
        raskest mulig kan ta nettsiden i bruk</h5>
          <p className="iconCredit"><a href="https://icons8.com/" target="_blank">All icons are by Icons8</a></p>
        </TabletBreakpoint>
        <PhoneBreakpoint>
        <div style={prisMobileStyle}>
        <Tabs>
          <TabList>
            <Tab>Billig løsning</Tab>
            <Tab>Nettbutikk</Tab>
            <Tab>Avansert Løsning</Tab>
          </TabList>
          <TabPanel>
            <h1 style={titleStyle}><strong>Enkel løsning</strong></h1>
            <h4 style={includingStyle}>Pris starter på 5.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.simpleContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobile}>
              <a href="/ClientA" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          <TabPanel>
            <h1 style={titleStyle}><strong>Nettbutikk</strong></h1>
            <h4 style={includingStyle}>Pris starter på 8.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.shopContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobile}>
              <a href="/ClientB" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          <TabPanel>
            <h1 style={titleStyle}><strong>Avansert løsning</strong></h1>
            <h4 style={includingStyle}>Pris starter på 12.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.advancedContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobile}>
              <a href="/ClientC" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
        <h5 style={lowerTextMobile}>Vi hjelper med domeneregistrering og oppsett av e-post adresse slik at dere
        raskest mulig kan ta nettsiden i bruk</h5>
        <p className="iconCredit"><a href="https://icons8.com/" target="_blank">All icons are by Icons8</a></p>
          </Tabs>
          </div>
        </PhoneBreakpoint>
        <PhoneSmallerBreakpoint>
        <div className="fourthMobileComponent">
        <div style={prisMobileStyle}>
        <Tabs>
          <TabList>
            <Tab>Enkel løsning</Tab>
            <Tab>Webstore</Tab>
            <Tab>Avansert Løsning</Tab>
          </TabList>
          <TabPanel>
            <h1 style={titleStyle}><strong>Enkel løsning</strong></h1>
            <h4 style={includingStyle}>Pris starter på 5.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.simpleContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileSmaller}>
              <a href="/ClientA" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          <TabPanel>
            <h1 style={titleStyle}><strong>Nettbutikk</strong></h1>
            <h4 style={includingStyle}>Pris starter på 8.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.shopContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileSmaller}>
              <a href="/ClientB" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          <TabPanel>
            <h1 style={titleStyle}><strong>Avansert løsning</strong></h1>
            <h4 style={includingStyle}>Pris starter på 12.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.advancedContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileSmaller}>
              <a href="/ClientC" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          </Tabs>
          </div>
          <h5 style={lowerTextMobile}>Vi hjelper med domeneregistrering og oppsett av e-post adresse slik at dere
          raskest mulig kan ta nettsiden i bruk</h5>
          <p className="iconCredit"><a href="https://icons8.com/" target="_blank">All icons are by Icons8</a></p>
          </div>
        </PhoneSmallerBreakpoint>
        <LandScapeBreakpoint>
        <div style={prisMobileStyleLandscape}>
        <Tabs>
          <TabList>
            <Tab>Enkel løsning</Tab>
            <Tab>Webstore</Tab>
            <Tab>Avansert Løsning</Tab>
          </TabList>
          <TabPanel>
            <h1 style={titleStyle}><strong>Enkel løsning</strong></h1>
            <h4 style={includingStyle}>Pris starter på 5.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.simpleContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileLandscape}>
              <a href="/ClientA" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          <TabPanel>
            <h1 style={titleStyle}><strong>Nettbutikk</strong></h1>
            <h4 style={includingStyle}>Pris starter på 8.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.shopContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileLandscape}>
              <a href="/ClientB" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          <TabPanel>
            <h1 style={titleStyle}><strong>Avansert løsning</strong></h1>
            <h4 style={includingStyle}>Pris starter på 12.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyle}>
              {this.shopContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileLandscape}>
              <a href="/ClientC" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
        <h5 style={lowerTextMobile}>Vi hjelper med domeneregistrering og oppsett av e-post adresse slik at dere
        raskest mulig kan ta nettsiden i bruk</h5>
        <p className="iconCredit"><a href="https://icons8.com/" target="_blank">All icons are by Icons8</a></p>
          </Tabs>
          </div>
        </LandScapeBreakpoint>
        <PhoneEvenSmallerBreakpoint>
        <div className="fourthMobileComponent">
        <div style={prisMobileStyle}>
        <Tabs>
          <TabList>
            <Tab>Enkel løsning</Tab>
            <Tab>Webstore</Tab>
            <Tab>Avansert Løsning</Tab>
          </TabList>
          <TabPanel>
            <h1 style={titleStyleMobile}><strong>Enkel løsning</strong></h1>
            <h4 style={includingStyleMobile}>Pris starter på 5.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyleMobile}>
              {this.simpleContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileSmaller}>
              <a href="/ClientA" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          <TabPanel>
            <h1 style={titleStyle}><strong>Nettbutikk</strong></h1>
            <h4 style={includingStyleMobile}>Pris starter på 8.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyleMobile}>
              {this.shopContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileSmaller}>
              <a href="/ClientB" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          <TabPanel>
            <h1 style={titleStyle}><strong>Avansert løsning</strong></h1>
            <h4 style={includingStyleMobile}>Pris starter på 12.000.-eks MVA og inkluderer:</h4>
            <h5 style={textStyleMobile}>
              {this.advancedContent()}
            </h5>
            <button className="aboutMeButton" style={readMoreButtonStyleMobileSmaller}>
              <a href="/ClientC" target="_blank">Se eksempel</a>
            </button>
          </TabPanel>
          </Tabs>
          </div>
          <h5 style={lowerTextMobile}>Vi hjelper med domeneregistrering og oppsett av e-post adresse slik at dere
          raskest mulig kan ta nettsiden i bruk</h5>
          <p className="iconCredit"><a href="https://icons8.com/" target="_blank">All icons are by Icons8</a></p>
          </div>
        </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default SecondComponent;
