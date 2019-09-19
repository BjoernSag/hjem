import React, { Component } from 'react';
import '../.././style.css';
import '../.././arrowStyle.scss';
import Gallery from 'react-photo-gallery';
import DesktopBreakpoint from '.././responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '.././responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '.././responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from '.././responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from '.././responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from '.././responsive_utilities/phoneEvenSmaller_breakpoint';
import Lightbox from 'react-image-lightbox';

class ClientA extends Component{
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      backgroundcolor: "",
    };
    this.conceptText = this.conceptText.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.conceptTextTop = this.conceptTextTop.bind(this);
    this.loadPhotos = this.loadPhotos.bind(this);
    this.arrowTop = this.arrowTop.bind(this);
  }
  openLightbox(event, obj) {
  this.setState({
    photoIndex: obj.index,
    isOpen: true,
  });
}
  conceptTextTop () {
    return  <p> Benthe ønsket en nettside med friske og naturlige farger.
    En side som alle kan bruke. Det skal være enkelt å bestille. </p>
  }
  conceptText () {
    return  <p> Benthe ønsket en nettside som gjenspeiler kvaliteten av produktene og som gir et oversiktlig
    og bra inntrykk av bedriften. Vi ønsker å gjøre det enkelt og brukervennlig for kunder å finne ut hva de forskjellige timene
    innebærer og at det er få tastetrykk fra kunden kommer til siden til
    de bestiller time. Og at det er enkelt for de ansatte å ha oversikt over timebestilling slik at
    de kan bruke mindre tid på administrasjon av websiden. </p>
  }
  arrowTop (minorSiteSeSi) {
    return <div className={minorSiteSeSi}>
            <a
              className="animated-arrow fontText"
              href="https://bentheshealingterapi.no"
              target="_blank">
              <span className="the-arrow -left">
                <span className="shaft">
                </span>
              </span>
              <span className="main">
                <span className="textLesMer">
                  Se siden
                </span>
              </span>
            </a>
          </div>
        }
  loadPhotos (column) {
    const photos = [
      {
        src: 'https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(1).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(2).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(3).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/bentheshealingterapi/Bjoernsagstad-Bentheshealingterapi%20(5).jpg',
        width: 3,
        height: 2,
        className: "photos",
      },
    ];
    const images = [
      'https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(1).jpg',
      'https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(2).jpg',
      'https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(3).jpg',
      'https://bjoernsagstad.com/pictures/bentheshealingterapi/Bjoernsagstad-Bentheshealingterapi%20(5).jpg',
    ];
    const { photoIndex, isOpen } = this.state;
    return (
      <div><Gallery top={5000} photos={photos} columns={column} margin={30} onClick={this.openLightbox}/>
      {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />)}
      </div>);
  }

  render(){
    var maxWid = {
      maxWidth: '95%',
      display: 'block',
      marginRight: 'auto',
      marginLeft: 'auto',
      opacity: '0.65',
    }
    var titleStyle = {
      color: 'black',
    }
    var titlesStyle = {
      color: 'white',
    }
    var bla = {
      color: 'black',
    }

    return (
      <div style={bla} className="minorSiteBackground">
        <DesktopBreakpoint>
        <div className="minorSitePart2Benth">
          <img
            className="imgMockupDesktopNew"
            src="https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealingterapi%20(2).png"
            alt="imgMockup nettside benthehealingsterapi"/>
        </div>
        <div className="minorSiteSecondDivBenth">
        <br />
        <br />
          <h1 style={titleStyle} className="minorSiteTitlesNew">
            Webdesign<br />Utvikling<br />Oppsett<br/>Vedlikehold
            <hr className="hrTop hrBenth"/>
          </h1>
          <h1 style={titleStyle} className="minorSiteOverview">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2019<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Hjemmeside for bedrift</h5>
            <hr className="hrSecond hrBenth"/>
          </h1>
          <p className="minorSiteTopText">
            {this.conceptText()}
          </p>
          {this.arrowTop("container2 minorSiteSeSide")}
          <br />
        </div>
        <div className="minorSiteThirdDivBenth">
        <div className="clientDivBenth">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/bentheshealingterapi/Bjoernsagstad-Bentheshealingterapi%20(2).jpg'
            alt='Bentheshealingterapi hjemmeside'/>
            <br/>
        </div>
        </div>
        <div className="minorSitePart3Benth">
          <div className="minorSiteMidText">
          {this.conceptTextTop()}
          </div>
        </div>
        <div className="minorSiteFourthDivBenth">
          <div className="minorSitePhotos">
            {this.loadPhotos(3)}
          </div>
        </div>
        <div>
          <div style={titlesStyle} className="minorSiteBotDiv">
            <div class="column">
              <p className="minorSiteBotText">
                <h1>
                  Andre prosjekter<br />
                </h1>
                <hr className="hrBot" />
                <h5>Se andre prosjekter vi har jobbet med</h5>
              </p>
            </div>
            <div class="imgcolumn">
              <a href="/clientB" target="_blank">
              <div className="overlayDiv">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(2).jpg'
                  alt='StabburetCatering'/>
                <div className="overlayStabb">
                <strong>Stabburet Catering</strong>
                  <br/>
                  Nettbutikk for catering
                </div>
              </div>
              </a>
            </div>
            <div class="imgcolumn">
              <a href="/ClientC" target="_blank">
              <div className="overlayDiv">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc.jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk for MC-tilbehør og kontaktside for MC og verksted
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
        <div style={titlesStyle} className="minorContact">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </DesktopBreakpoint>
        <TabletBreakpoint>
        <div className="minorSitePart2TabletBeth">
          <img
            className="imgMockupDesktopNew"
            src="https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealingterapi%20(2).png"
            alt="imgMockup nettside benthehealingsterapi"/>
        </div>
        <div className="minorSiteSecondDivTabletBenth">
          <h1 style={titleStyle} className="minorSiteTitlesTablet">
            Webdesign<br />Utvikling<br />Oppsett<br/>Vedlikehold
            <hr className="hrTop hrBenth"/>
          </h1>
          <h1 style={titleStyle} className="minorSiteOverviewTablet">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2019<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Hjemmeside for bedrift</h5>
            <hr className="hrSecond hrBenth"/>
          </h1>
          <p className="minorSiteTopTextTablet">
            {this.conceptText()}
          </p>
          {this.arrowTop("container2 minorSiteSeSideTablet")}
        </div>
        <div className="minorSiteThirdDivBenth">
        <div className="clientDivBenth">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/bentheshealingterapi/Bjoernsagstad-Bentheshealingterapi%20(2).jpg'
            alt='Bentheshealingterapi hjemmeside'/>
            <br/>
        </div>
        </div>
        <div className="minorSitePart3Benth">
          <div className="minorSiteMidText">
          {this.conceptTextTop()}
          </div>
        </div>
        <div className="minorSiteFourthDivBenth">
          <div className="minorSitePhotos">
            {this.loadPhotos(3)}
          </div>
        </div>
        <div>
          <div style={titlesStyle} className="minorSiteBotDiv">
            <div class="column">
              <p className="minorSiteBotText">
                <h1>
                  Andre prosjekter<br />
                </h1>
                <hr className="hrBot" />
                <h5>Se andre prosjekter vi har jobbet med</h5>
              </p>
            </div>
            <div class="imgcolumn">
              <a href="/ClientB" target="_blank">
              <div className="overlayDiv">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(2).jpg'
                  alt='StabburetCatering eksempel paa bjoernsagstad'/>
                <div className="overlayStabb">
                <strong>Stabburet Catering</strong>
                  <br/>
                  Nettbutikk for catering
                </div>
              </div>
              </a>
            </div>
            <div class="imgcolumn">
              <a href="/ClientC" target="_blank">
              <div className="overlayDiv">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc.jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk for MC-tilbehør og kontaktside for MC og verksted
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
        <div style={titlesStyle} className="minorContact">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </TabletBreakpoint>
        <PhoneBreakpoint>
        <div className="minorSitePart2Benth">
        <div className="minorSitePart2SmallMobileBenth">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealingterapi%20(2).png"
            alt="imgMockup nettside benthehealingsterapi"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Webdesign<br />Utvikling<br />Oppsett<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrBenth"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2019<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Hjemmeside for bedrift</h5>
            <hr className="hrSecond hrBenth"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDivBenth">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/bentheshealingterapi/Bjoernsagstad-Bentheshealingterapi%20(2).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3Benth">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscapeBenth">
          <div className="minorSiteLoadImg">
            {this.loadPhotos(1)}
          </div>
        </div>

        <div>
          <div className="minorSiteBotDiv">
              <center>
              <p style={titlesStyle} className="minorSiteBotTextMobile">
                <h1>
                  <strong>Andre prosjekter<br /></strong>
                </h1>
                <h5>Se andre prosjekter vi har jobbet med</h5>
              </p></center>
              <a href="/ClientB" target="_blank">
              <div className="overlayDivMobile">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering.jpg'
                  alt='StabburetCatering eksempel paa bjoernsagstad'/>
                <div className="overlayStabb">
                <strong>Stabburet Catering</strong>
                  <br/>
                  Nettbutikk for catering
                </div>
              </div>
              </a>
              <a href="/ClientC" target="_blank">
              <div className="overlayDivMobile">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(7)%20(2).jpg'
                alt='RovikMC nettside eksempel paa bjoernsagstad'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk for MC-tilbehør og kontaktside for MC og verksted
                </div>
              </div>
              </a>
          </div>
        </div>
        <div style={titlesStyle} className="minorContactMobile">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </PhoneBreakpoint>
        <PhoneSmallerBreakpoint>
        <div className="minorSitePart2Benth">
        <div className="minorSitePart2SmallMobileBenth">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealingterapi%20(2).png"
            alt="imgMockup nettside benthehealingsterapi"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Webdesign<br />Utvikling<br />Oppsett<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrBenth"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2019<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Hjemmeside for bedrift</h5>
            <hr className="hrSecond hrBenth"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDivBenth">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/bentheshealingterapi/Bjoernsagstad-Bentheshealingterapi%20(2).jpg'
            alt='Benthehealingterapi hjemmeside eksempel paa bjoernsagstad'/>
            <br/>
        </div>
        <div className="minorSitePart3Benth">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscapeBenth">
          <div className="minorSiteLoadImg">
            {this.loadPhotos(1)}
          </div>
        </div>

        <div>
          <div className="minorSiteBotDiv">
              <center>
              <p style={titlesStyle} className="minorSiteBotTextMobile">
                <h1>
                  <strong>Andre prosjekter<br /></strong>
                </h1>
                <h5>Se andre prosjekter vi har jobbet med</h5>
              </p></center>
              <a href="/ClientB" target="_blank">
              <div className="overlayDivMobile">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering.jpg'
                  alt='StabburetCatering'/>
                <div className="overlayStabb">
                <strong>Stabburet Catering</strong>
                  <br/>
                  Nettbutikk for catering
                </div>
              </div>
              </a>
              <a href="/ClientC" target="_blank">
              <div className="overlayDivMobile">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(7)%20(2).jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk for MC-tilbehør og kontaktside for MC og verksted
                </div>
              </div>
              </a>
          </div>
        </div>
        <div style={titlesStyle} className="minorContactMobile">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </PhoneSmallerBreakpoint>
        <LandScapeBreakpoint>
        <div className="minorSitePart2LandscapeBeth">
        <div className="minorSitePart2TopLandscape">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealingterapi%20(2).png"
            alt="imgMockup nettside benthehealingsterapi"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Webdesign<br />Utvikling<br />Oppsett<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrBenth"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewLandscape">
            Verktøy Dato Oversikt<br />
            <h5 className="minorSiteUnderTitlesLandscape">
              Wordpress&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              2019&nbsp;&nbsp;&nbsp;&nbsp;
              Hjemmeside for bedrift<br /></h5>
            <hr className="hrSecondTablet hrBenth"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideLandscape")}
        </div>

        <div className="clientDivBenth">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/bentheshealingterapi/Bjoernsagstad-Bentheshealingterapi%20(2).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3Benth">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscapeBenth">
          <div >
            {this.loadPhotos(3)}
          </div>
        </div>
        <div>
          <div className="minorSiteBotDiv">
              <center><p className="minorSiteBotTextMobile">
                <h1 style={titlesStyle}>
                  <strong>Andre prosjekter<br /></strong>
                </h1>
                <h5>Se andre prosjekter vi har jobbet med</h5>
              </p></center>
              <div class="imgcolumnLandscape">
              <a href="/ClientB" target="_blank">
              <div className="overlayDivMobile">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering.jpg'
                  alt='StabburetCatering'/>
                <div className="overlayStabb">
                <strong>Stabburet Catering</strong>
                  <br/>
                  Nettbutikk for catering
                </div>
              </div>
              </a>
              </div>
              <div class="imgcolumnLandscape">
              <a href="/ClientC" target="_blank">
              <div className="overlayDivMobile">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(7)%20(2).jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk for MC-tilbehør og kontaktside for MC og verksted
                </div>
              </div>
              </a>
              </div>
          </div>
        </div>
        <div style={titlesStyle} className="minorContactLandscape">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </LandScapeBreakpoint>
        <PhoneEvenSmallerBreakpoint>
        <div className="minorSitePart2Benth">
        <div className="minorSitePart2SmallMobileBenth">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealingterapi%20(2).png"
            alt="imgMockup nettside benthehealingsterapi"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Webdesign<br />Utvikling<br />Oppsett<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrBenth"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2019<br /></h5>
            <hr className="hrSecond hrBenth"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Hjemmeside for bedrift</h5>
            <hr className="hrSecond hrBenth"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDivBenth">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/bentheshealingterapi/Bjoernsagstad-Bentheshealingterapi%20(2).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3Benth">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscapeBenth">
          <div className="minorSiteLoadImg">
            {this.loadPhotos(1)}
          </div>
        </div>

        <div>
          <div className="minorSiteBotDiv">
              <center>
              <p style={titlesStyle} className="minorSiteBotTextMobile">
                <h1>
                  <strong>Andre prosjekter<br /></strong>
                </h1>
                <h5>Se andre prosjekter vi har jobbet med</h5>
              </p></center>
              <a href="/ClientB" target="_blank">
              <div className="overlayDivMobile">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering.jpg'
                  alt='StabburetCatering'/>
                <div className="overlayStabb">
                <strong>Stabburet Catering</strong>
                  <br/>
                  Nettbutikk for catering
                </div>
              </div>
              </a>
              <a href="/ClientC" target="_blank">
              <div className="overlayDivMobile">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(7)%20(2).jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk for MC-tilbehør og kontaktside for MC og verksted
                </div>
              </div>
              </a>
          </div>
        </div>
        <div style={titlesStyle} className="minorContactMobile">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default ClientA;
