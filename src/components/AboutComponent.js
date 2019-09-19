import React, { Component } from 'react';
import '.././style.css';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from './responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from './responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from './responsive_utilities/phoneEvenSmaller_breakpoint';


class AboutComponent extends Component{
  constructor (){
    super();
    this.state = {
      backgroundcolor : "",
    }
    this.content = this.content.bind(this);
    this.aboutTitl = this.aboutTitl.bind(this);
    this.linkStyle = this.linkStyle.bind(this);
  }

  aboutTitl = () => {
    return {color: '#C3073F'}
  }

  linkStyle = () => {
    return {color: '#4e4e50',
    wordWrap: 'break-word'}
  }

  content = () => {
    return <div><strong> Ledig for oppdrag:</strong> Mars 2019
            <br />
            <br />
            Hei! Mitt navn er Bjørn og jeg er en freelance webdesigner fra Stavanger.
            <br />
            <br />
            Jeg elsker å se ideer komme til liv, og tar med glede på meg både små og store oppdrag.
            Jeg har bachelor i datateknologi fra Universitet I Bergen,
            hvor jeg tilbrakte det siste året på Hong Kong University of Science and Technology.
            <br />
            <br />
            <h1 style={this.aboutTitl()}><strong> Verktøy</strong></h1>
            Jeg jobber ofte med wordpress eller shopify, men jeg gjør gjerne oppdrag som innvolverer ReactJS, NodeJS eller andre
            Javascript rammeverk.
            <br />
            <br />
            <h1 style={this.aboutTitl()}><strong> Kontakt</strong></h1>
            Tlf: 984 53 145
            <br />
            Mail: <a style={this.linkStyle()} href="mailto:bjoern@bjoernsagstad.com">bjoern@bjoernsagstad.com</a>
            <br />
            <br />
            Ln: <a style={this.linkStyle()}
              href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168"
              target="_blank">linkedin</a>
          </div>
  }

  render(){

    var aStyle = {
      color: "white",
    }

    var fixedBackButtonStyle = {
      position: 'fixed',
    }
    var imgStyle = {
      maxWidth: '80%',
      maxHeight: '60%',
      position: 'fixed',
      top: '20%',
      left: '20%',
    }

    var imgStyleMobile = {
      maxWidth: '55%',
      maxHeight: '55%',
      position: 'fixed',
      top: '24%',
      left: '15%',
    }
    var imgStyleMobileSmaller = {
      maxWidth: '55%',
      maxHeight: '40%',
      position: 'fixed',
      top: '24%',
      left: '8%',
    }

    var aboutTitle = {
      position: 'relative',
      top: '8%',
      left: '60%',
      color: '#C3073F',
    }
    var aboutTitleMobile = {
      position: 'relative',
      top: '8%',
      left: '60%',
      color: '#C3073F',
      fontSize: '20px',
    }

    var aboutTitle2Mobile = {
      color: '#C3073F',
      fontSize: '20px',
    }
    var aboutTitleMobileLandscape = {
      color: '#C3073F',
      fontSize: '14px',
    }


    var aboutUnderTitle =  {
      position: 'relative',
      left: '60%',
      width: '35%',
      marginBottom:'50px',
    }
    var aboutUnderTitleMobile =  {
      position: 'relative',
      top: '10%',
      left: '60%',
      width: '30%',
      marginBottom:'50px',
      fontSize: '12px',
    }
    var aboutUnderTitleMobileLandscape =  {
      position: 'relative',
      top: '10%',
      left: '60%',
      width: '30%',
      marginBottom:'50px',
      fontSize: '8px',
    }
    var aboutUnderTitleMobileSmaller =  {
      position: 'relative',
      top: '24%',
      left: '60%',
      width: '30%',
      marginBottom:'50px',
      fontSize: '12px',
    }

    var aboutTopDiv = {
      marginTop: '10%',
      position: 'relative',
    }
    var aboutTopDivMobile = {
      marginTop: '0%',
      position: 'relative',
      top: '10%',
    }
    var aboutTopDivMobileSmaller = {
      marginTop: '0%',
      position: 'relative',
      top: '24%',
    }

    var contactOpacityStyle = {
      opacity: '1',
      position: 'fixed',
      fontSize: '300px',
      fontWeight: '100',
      left: '10%',
      top: '65%',
      letterSpacing: '8px',
      color: '#C3073F',
      transform: 'rotate(-5deg)',
    };

    var contactOpacityStyleMobile = {
      opacity: '1',
      position: 'fixed',
      fontSize: '200px',
      fontWeight: '100',
      left: '10%',
      top: '75%',
      letterSpacing: '8px',
      color: '#C3073F',
      transform: 'rotate(-5deg)',
    };

    return (
      <div className="aboutBackground">
      <DesktopBreakpoint>

      <ul style={fixedBackButtonStyle} id='arrows'>
        <li className='bottom-left'><a style={aStyle} href="/">Gå tilbake</a></li>
      </ul>
      <img style={imgStyle} src="https://bjoernsagstad.com/pictures/bjoernsagstad/Bjoernsagstad-aboutPic.jpg" alt="imgStyle"/>

      <h1 style={contactOpacityStyle} className="test2">
        Hei</h1>

      <div style={aboutTopDiv}>
        <h1 style={aboutTitle}>
          <strong>Bio</strong>
        </h1>
        </div>
        <h5 style={aboutUnderTitle}>
          {this.content()}

        </h5>

      </DesktopBreakpoint>
      <TabletBreakpoint>
      <ul style={fixedBackButtonStyle} id='arrows'>
        <li className='bottom-left'><a style={aStyle} href="/">Gå tilbake</a></li>
      </ul>
      <img style={imgStyle} src="https://bjoernsagstad.com/pictures/bjoernsagstad/Bjoernsagstad-aboutPic.jpg" alt="imgStyle"/>

      <h1 style={contactOpacityStyle} className="test2">
        Hei</h1>

      <div style={aboutTopDiv}>
        <h1 style={aboutTitle}>
          <strong>Bio</strong>
        </h1>
        </div>
        <h5 style={aboutUnderTitle}>
          {this.content()}
        </h5>
      </TabletBreakpoint>
      <PhoneBreakpoint>
            <img style={imgStyleMobile} src="https://bjoernsagstad.com/pictures/bjoernsagstad/bjoernsagstad-aboutpic-smaller.jpg" alt="imgStyle"/>
            <br />
            <br />
            <br />
            <h1 style={contactOpacityStyleMobile} className="test2">
              Hei</h1>
            <div style={aboutTopDivMobile}>
              <h1 style={aboutTitleMobile}>
                <strong>Bio</strong>
              </h1>
              </div>
              <h5 style={aboutUnderTitleMobile}>
                {this.content()}
              </h5>
      </PhoneBreakpoint>
      <PhoneSmallerBreakpoint>
            <img style={imgStyleMobileSmaller} src="https://bjoernsagstad.com/pictures/bjoernsagstad/bjoernsagstad-aboutpic-smaller.jpg" alt="imgStyle"/>
            <h1 style={contactOpacityStyleMobile} className="test2">
              Hei</h1>

            <div style={aboutTopDivMobileSmaller}>
              <h1 style={aboutTitleMobile}>
                <strong>Bio</strong>
              </h1>
              </div>
              <h5 style={aboutUnderTitleMobileSmaller}>
              <div><strong> Ledig for oppdrag:</strong> Mars 2019
                      <br />
                      <br />
                      Hei! Mitt navn er Bjørn og jeg er en freelance webdesigner fra Stavanger.
                      <br />
                      <br />
                      Jeg elsker å se ideer komme til liv, og tar med glede på meg både små og store oppdrag.
                      Jeg har bachelor i datateknologi fra Universitet I Bergen,
                      hvor jeg tilbrakte det siste året på Hong Kong University of Science and Technology.
                      <br />
                      <br />
                      <h1 style={aboutTitle2Mobile}><strong> Verktøy</strong></h1>
                      Jeg jobber ofte med wordpress eller shopify, men jeg gjør gjerne oppdrag som innvolverer ReactJS, NodeJS eller andre
                      Javascript rammeverk.
                      <br />
                      <br />
                      <h1 style={aboutTitle2Mobile}><strong> Kontakt</strong></h1>
                      Tlf: 984 53 145
                      <br />
                      Mail: <a style={this.linkStyle()} href="mailto:bjoern@bjoernsagstad.com">bjoern@bjoernsagstad.com</a>
                      <br />
                      <br />
                      Ln: <a style={this.linkStyle()}
                      href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
                      target="_blank">linkedin</a>
                    </div>
              </h5>
      </PhoneSmallerBreakpoint>
      <LandScapeBreakpoint>
      <img style={imgStyleMobile} src="https://bjoernsagstad.com/pictures/bjoernsagstad/bjoernsagstad-aboutpic-smaller.jpg" alt="imgStyle"/>
      <br />
      <br />
      <br />
      <h1 style={contactOpacityStyleMobile} className="test2">
        Hei</h1>
      <div style={aboutTopDivMobile}>
        <h1 style={aboutTitleMobile}>
          <strong>Bio</strong>
        </h1>
        </div>
        <h5 style={aboutUnderTitleMobileLandscape}>
        <div><strong> Ledig for oppdrag:</strong> Mars 2019
                <br />
                <br />
                Hei! Mitt navn er Bjørn og jeg er en freelance webdesigner fra Stavanger.
                <br />
                <br />
                Jeg elsker å se ideer komme til liv, og tar med glede på meg både små og store oppdrag.
                Jeg har bachelor i datateknologi fra Universitet I Bergen,
                hvor jeg tilbrakte det siste året på Hong Kong University of Science and Technology.
                <br />
                <br />
                <h1 style={aboutTitleMobileLandscape}><strong> Verktøy</strong></h1>
                Jeg jobber ofte med wordpress eller shopify, men jeg gjør gjerne oppdrag som innvolverer ReactJS, NodeJS eller andre
                Javascript rammeverk.
                <br />
                <br />
                <h1 style={aboutTitleMobileLandscape}><strong> Kontakt</strong></h1>
                Tlf: 984 53 145
                <br />
                Mail: <a style={this.linkStyle()} href="mailto:bjoern@bjoernsagstad.com">bjoern@bjoernsagstad.com</a>
                <br />
                <br />
                Ln: <a style={this.linkStyle()}
                href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
                target="_blank">linkedin</a>
              </div>
        </h5>
      </LandScapeBreakpoint>
      <PhoneEvenSmallerBreakpoint>
      <img style={imgStyleMobileSmaller} src="https://bjoernsagstad.com/pictures/bjoernsagstad/bjoernsagstad-aboutpic-smaller.jpg" alt="imgStyle"/>
      <h1 style={contactOpacityStyleMobile} className="test2">
        Hei</h1>

      <div style={aboutTopDivMobileSmaller}>
        <h1 style={aboutTitleMobile}>
          <strong>Bio</strong>
        </h1>
        </div>
        <h5 style={aboutUnderTitleMobileSmaller}>
        <div><strong> Ledig for oppdrag:</strong> Mars 2019
                <br />
                <br />
                Hei! Mitt navn er Bjørn og jeg er en freelance webdesigner fra Stavanger.
                <br />
                <br />
                Jeg elsker å se ideer komme til liv, og tar med glede på meg både små og store oppdrag.
                Jeg har bachelor i datateknologi fra Universitet I Bergen,
                hvor jeg tilbrakte det siste året på Hong Kong University of Science and Technology.
                <br />
                <br />
                <h1 style={aboutTitle2Mobile}><strong> Verktøy</strong></h1>
                Jeg jobber ofte med wordpress eller shopify, men jeg gjør gjerne oppdrag som innvolverer ReactJS, NodeJS eller andre
                Javascript rammeverk.
                <br />
                <br />
                <h1 style={aboutTitle2Mobile}><strong> Kontakt</strong></h1>
                Tlf: 984 53 145
                <br />
                Mail: <a style={this.linkStyle()} href="mailto:bjoern@bjoernsagstad.com">bjoern@bjoernsagstad.com</a>
                <br />
                <br />
                Ln: <a style={this.linkStyle()}
                  href="https://www.linkedin.com/in/bjoern-ove-sagstad-49a287168/"
                  target="_blank">linkedin</a>
              </div>
        </h5>
      </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default AboutComponent;
