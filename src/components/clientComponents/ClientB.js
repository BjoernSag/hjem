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

class ClientB extends Component{
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      backgroundcolor: "",
    };
    this.openLightbox = this.openLightbox.bind(this);
    this.conceptText = this.conceptText.bind(this);
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
    return  <p> Ethvert sekund siden bruker på å laste forsvinner en kunde.
    Målet var å beholde funksjonalitet men øke hastigheten. </p>
  }
  conceptText () {
    return  <p> Stabburet Catering ønsket en rask nettside med masse funksjonalitet.
    De ønsket å nå ut både privat og til bedrifter. Fokuset var på menyen og produktet, og
    et av hovedmålene var å få oppdrag til arrangementer, bedriftslunsj og selskap.
    Med smarte løsninger så trenger ikke de ansatte å bruke mye tid på administrasjon,
    og kundene kan enkelt bestille hva de ønsker, og spesifisere nøyaktig tid. </p>
  }
  arrowTop (minorSiteSeSi) {
    return <div className={minorSiteSeSi}>
            <a
              className="animated-arrow fontText"
              href="https://stabburetcatering.no"
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
        src: 'http://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(1).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(3).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(4).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(6).jpg',
        width: 3,
        height: 2,
        className: "photos",
      },
    ];

    const images = [
      'https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(1).jpg',
      'https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(3).jpg',
      'https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(4).jpg',
      'https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(6).jpg',
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
        <div className="minorSitePart2">
          <img
            className="imgMockupDesktopNew"
            src="https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering-mockup.png"
            alt="imgMockup"/>
        </div>
        <div className="minorSiteSecondDiv">
          <h1 style={titleStyle} className="minorSiteTitlesNew">
            Optimalisering<br />Videreutvikling<br />SEO<br/>Vedlikehold
            <hr className="hrTop hrStabb"/>
          </h1>
          <h1 style={titleStyle} className="minorSiteOverview">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Nettbutikk for catering</h5>
            <hr className="hrSecond hrStabb"/>
          </h1>
          <p className="minorSiteTopText">
            {this.conceptText()}
          </p>
          {this.arrowTop("container2 minorSiteSeSide")}
          <br />
        </div>
        <div className="minorSiteThirdDiv">
        <div className="clientDiv">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(7).jpg'
            alt='stabburetCatering'/>
            <br/>
        </div>
        </div>
        <div className="minorSitePart3">
          <div className="minorSiteMidText">
          {this.conceptTextTop()}
          </div>
        </div>
        <div className="minorSiteFourthDiv">
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
              <a href="/clientA" target="_blank">
              <div className="overlayDiv">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new.jpg'
                  alt='Bentheshealingterapi'/>
                <div className="overlayBenth">
                <strong>Benthes Healingterapi</strong>
                  <br/>
                  Hjemmeside
                </div>
              </div>
              </a>
            </div>
            <div class="imgcolumn">
              <a href="/clientC" target="_blank">
              <div className="overlayDiv">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc.jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk
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
        <div className="minorSitePart2Tablet">
          <img
            className="imgMockupDesktopNew"
            src="https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering-mockup.png"
            alt="imgMockup"/>
        </div>
        <div className="minorSiteSecondDivTablet">
        <br />
        <br />
          <h1 style={titleStyle} className="minorSiteTitlesTablet">
            Optimalisering<br />Videreutvikling<br />SEO<br/>Vedlikehold
            <hr className="hrTop hrStabb"/>
          </h1>
          <h1 style={titleStyle} className="minorSiteOverviewTablet">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Nettbutikk</h5>
            <hr className="hrSecond hrStabb"/>
          </h1>
          <p className="minorSiteTopTextTablet">
            {this.conceptText()}
          </p>
          {this.arrowTop("container2 minorSiteSeSideTablet")}
        </div>
        <div className="minorSiteThirdDiv">
        <div className="clientDiv">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(7).jpg'
            alt='Bentheshealingterapi'/>
            <br/>
        </div>
        </div>
        <div className="minorSitePart3">
          <div className="minorSiteMidText">
          {this.conceptTextTop()}
          </div>
        </div>
        <div className="minorSiteFourthDiv">
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
              <a href="/clientA" target="_blank">
              <div className="overlayDiv">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new.jpg'
                  alt='Bentheshealingterapi'/>
                <div className="overlayBenth">
                <strong>Benthes Healingterapi</strong>
                  <br/>
                  Hjemmeside
                </div>
              </div>
              </a>
            </div>
            <div class="imgcolumn">
              <a href="//ClientC" target="_blank">
              <div className="overlayDiv">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc.jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk
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
        <div className="minorSitePart2">
        <div className="minorSitePart2SmallMobile">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering-mockup.png"
            alt="imgMockup"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Optimalisering<br />Videreutvikling<br />SEO<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrStabb"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Nettbutikk for catering</h5>
            <hr className="hrSecond hrStabb"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDiv">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(7).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscape">
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
              <a href="/clientA" target="_blank">
              <div className="overlayDivMobile">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(4).jpg'
                  alt='Bentheshealingterapi'/>
                <div className="overlayBenth">
                <strong>Benthes Healingterapi</strong>
                  <br/>
                  Hjemmeside
                </div>
              </div>
              </a>
              <a href="//ClientC" target="_blank">
              <div className="overlayDivMobile">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(7)%20(2).jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk
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
        <div className="minorSitePart2">
        <div className="minorSitePart2SmallMobile">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering-mockup.png"
            alt="imgMockup"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Optimalisering<br />Videreutvikling<br />SEO<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrStabb"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Nettbutikk for catering</h5>
            <hr className="hrSecond hrStabb"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDiv">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(7).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscape">
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
              <a href="/clientA" target="_blank">
              <div className="overlayDivMobile">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(4).jpg'
                  alt='Bentheshealingterapi'/>
                <div className="overlayBenth">
                <strong>Benthes Healingterapi</strong>
                  <br/>
                  Hjemmeside
                </div>
              </div>
              </a>
              <a href="//ClientC" target="_blank">
              <div className="overlayDivMobile">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(7)%20(2).jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk
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
        <div className="minorSitePart2Landscape">
        <div className="minorSitePart2TopLandscape">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering-mockup.png"
            alt="imgMockup"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Optimalisering<br />Videreutvikling<br />SEO<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrStabb"/>
          <p className="minorSiteTopTextSmallLandscape">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewLandscape">
          Verktøy Dato Oversikt<br />
          <h5 className="minorSiteUnderTitlesLandscape">
            Wordpress&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2018/2019&nbsp;&nbsp;&nbsp;&nbsp;
            Nettbutikk for catering<br /></h5>
          <hr className="hrSecondTablet hrStabb"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideLandscape")}
        </div>

        <div className="clientDiv">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(7).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscape">
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
              <a href="/clientA" target="_blank">
              <div className="overlayDivMobile">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(4).jpg'
                  alt='Bentheshealingterapi'/>
                <div className="overlayBenth">
                <strong>Benthes Healingterapi</strong>
                  <br/>
                  Hjemmeside
                </div>
              </div>
              </a>
              </div>
              <div class="imgcolumnLandscape">
              <a href="/clientC" target="_blank">
              <div className="overlayDivMobile">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(7)%20(2).jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk
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
        <div className="minorSitePart2">
        <div className="minorSitePart2SmallMobile">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering-mockup.png"
            alt="imgMockup"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Optimalisering<br />Videreutvikling<br />SEO<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrStabb"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrStabb"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Nettbutikk for catering</h5>
            <hr className="hrSecond hrStabb"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDiv">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/stabburetcatering/bjoernsagstad-stabburetcatering%20(7).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscape">
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
              <a href="/clientA" target="_blank">
              <div className="overlayDivMobile">
                <img
                  className="minorSiteBotImage"
                  src='https://bjoernsagstad.com/pictures/bentheshealingterapi/bjoernsagstad-bentheshealing-new%20(4).jpg'
                  alt='Bentheshealingterapi'/>
                <div className="overlayBenth">
                <strong>Benthes Healingterapi</strong>
                  <br/>
                  Hjemmeside
                </div>
              </div>
              </a>
              <a href="//ClientC" target="_blank">
              <div className="overlayDivMobile">
                <img
                className="minorSiteBotImage"
                src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(7)%20(2).jpg'
                alt='RovikMC'/>
                <div className="overlayRov">
                  <strong>RovikMC</strong>
                  <br/>
                  Nettbutikk
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

export default ClientB;
