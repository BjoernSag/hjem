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

class ClientC extends Component{
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
    return  <p> RovikMC hadde en side fra før, men ønsket et nytt look.
    Vi laget en raskere side for å skape salg både på nett og i butikk. </p>
  }
  conceptText () {
    return  <p> RovikMC ønsket en rask og oversiktlig side hvor kunder både
    kunne nå verksted, skjekke ut de nyeste modellene, lese nyheter i lokalsamfunnet,
    og kjøpe det tilbehøret de ønsket til sykkelen. Det var også essensielt at de ansatte
    skulle bruke minst mulig tid og energy på administrasjon av websiden. Derfor valgte
    vi sammen det oppsettet vi har, og vi brukte gode plugins og temaer for best
    mulig resultat. </p>
  }
  arrowTop (minorSiteSeSi) {
    return <div className={minorSiteSeSi}>
            <a
              className="animated-arrow fontText"
              href="https://rovikmc.no"
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
        src: 'https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(6).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(11).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(4).jpg',
        width: 1,
        height: 2,
        className: "photos",
      },
      {
        src: 'https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(9).jpg',
        width: 3,
        height: 2,
        className: "photos",
      },
    ];

    const images = [
      'https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(6).jpg',
      'https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(11).jpg',
      'https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(4).jpg',
      'https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(9).jpg',
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
        <div className="minorSitePart2Rov">
          <img
            className="imgMockupDesktopNew"
            src="https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(1).png"
            alt="imgMockup"/>
        </div>
        <div className="minorSiteSecondDivRov">
          <h1 style={titleStyle} className="minorSiteTitlesNew">
            Webdesign<br />Utvikling<br />SEO<br/>Vedlikehold
            <hr className="hrTop hrRov"/>
          </h1>
          <h1 style={titleStyle} className="minorSiteOverview">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrRov"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrRov"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Webshop og kontaktpunkt</h5>
            <hr className="hrSecond hrRov"/>
          </h1>
          <p className="minorSiteTopText">
            {this.conceptText()}
          </p>
          {this.arrowTop("container2 minorSiteSeSide")}
          <br />
        </div>
        <div className="minorSiteThirdDivRov">
        <div className="clientDivRov">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(10).jpg'
            alt='rovikmc'/>
            <br/>
        </div>
        </div>
        <div className="minorSitePart3Rov">
          <div className="minorSiteMidText">
          {this.conceptTextTop()}
          </div>
        </div>
        <div className="minorSiteFourthDivRov">
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
              <a href="/ClientB" target="_blank">
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
          </div>
        </div>
        <div style={titlesStyle} className="minorContact">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </DesktopBreakpoint>
        <TabletBreakpoint>
        <div className="minorSitePart2TabletRov">
          <img
            className="imgMockupDesktopNew"
            src="https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(1).png"
            alt="imgMockup"/>
        </div>
        <div className="minorSiteSecondDivTabletRov">
          <h1 style={titleStyle} className="minorSiteTitlesTablet">
            Webdesign<br />Utvikling<br />SEO<br/>Vedlikehold
            <hr className="hrTop hrRov"/>
          </h1>
          <h1 style={titleStyle} className="minorSiteOverviewTablet">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrRov"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrRov"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Webshop og kontaktpunkt</h5>
            <hr className="hrSecond hrRov"/>
          </h1>
          <p className="minorSiteTopTextTablet">
            {this.conceptText()}
          </p>
          {this.arrowTop("container2 minorSiteSeSideTablet")}
        </div>
        <div className="minorSiteThirdDivRov">
        <div className="clientDivRov">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(10).jpg'
            alt='rovikmc'/>
            <br/>
        </div>
        </div>
        <div className="minorSitePart3Rov">
          <div className="minorSiteMidText">
          {this.conceptTextTop()}
          </div>
        </div>
        <div className="minorSiteFourthDivRov">
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
              <a href="/ClientB" target="_blank">
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
          </div>
        </div>
        <div style={titlesStyle} className="minorContact">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </TabletBreakpoint>
        <PhoneBreakpoint>
        <div className="minorSitePart2Rov">
        <div className="minorSitePart2SmallMobileRov">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(1).png"
            alt="imgMockup"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Webdesign<br />Utvikling<br />SEO<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrRov"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrRov"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrRov"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Webshop og kontaktpunkt</h5>
            <hr className="hrSecond hrRov"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDivRov">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(10).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3Rov">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallMobileRov">
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
        </div>
        <div style={titlesStyle} className="minorContactMobile">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </PhoneBreakpoint>
        <PhoneSmallerBreakpoint>
        <div className="minorSitePart2Rov">
        <div className="minorSitePart2SmallMobileRov">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(1).png"
            alt="imgMockup"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Webdesign<br />Utvikling<br />SEO<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrRov"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrRov"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrRov"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Webshop og kontaktpunkt</h5>
            <hr className="hrSecond hrRov"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDivRov">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(10).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3Rov">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallMobileRov">
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
        </div>
        <div style={titlesStyle} className="minorContactMobile">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </PhoneSmallerBreakpoint>
        <LandScapeBreakpoint>
        <div className="minorSitePart2LandscapeRov">
        <div className="minorSitePart2TopLandscape">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(1).png"
            alt="imgMockup"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Webdesign<br />Utvikling<br />SEO<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrRov"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewLandscape">
          Verktøy Dato Oversikt<br />
          <h5 className="minorSiteUnderTitlesLandscape">
            Wordpress&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2018/2019&nbsp;&nbsp;&nbsp;&nbsp;
            Webshop og kontaktpunkt<br /></h5>
          <hr className="hrSecondTablet hrRov"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideLandscape")}
        </div>

        <div className="clientDivRov">
          <img
            className="clientImage"
            src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(10).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3Rov">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscapeRov">
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
          </div>
        </div>
        <div style={titlesStyle} className="minorContactLandscape">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </LandScapeBreakpoint>
        <PhoneEvenSmallerBreakpoint>
        <div className="minorSitePart2Rov">
        <div className="minorSitePart2SmallMobileRov">
          <img
            className="imgMockupMobile"
            src="https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(1).png"
            alt="imgMockup"/>
        </div>
          <h1 style={titleStyle} className="minorSiteTitlesNewSmallMobile">
            <strong>Webdesign<br />Utvikling<br />SEO<br/>Vedlikehold</strong>
          </h1>
          <hr className="hrTop hrRov"/>
          <p className="minorSiteTopTextSmallMobile">
            {this.conceptText()}
          </p>
          <h1 style={titleStyle} className="minorSiteOverviewSmallMobile">
            Verktøy<br />
            <h5 className="minorSiteUnderTitlesNew">Wordpress<br /></h5>
            <hr className="hrSecond hrRov"/>
            Dato<br />
            <h5 className="minorSiteUnderTitlesNew">2018/2019<br /></h5>
            <hr className="hrSecond hrRov"/>
            Oversikt<br />
            <h5 className="minorSiteUnderTitlesNew">Webshop og kontaktpunkt</h5>
            <hr className="hrSecond hrRov"/>
          </h1>
          {this.arrowTop("container2 minorSiteSeSideMobil")}
        </div>

        <div className="clientDivRov">
          <img
            className="clientImageMobile"
            src='https://bjoernsagstad.com/pictures/rovikmc/bjoernsagstad-rovikmc%20(10).jpg'
            alt='RovikMC'/>
            <br/>
        </div>
        <div className="minorSitePart3Rov">
          <p style={maxWid}>{this.conceptTextTop()}</p>
        </div>
        <div className="minorSitePart2SmallLandscapeRov">
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
        </div>
        <div style={titlesStyle} className="minorContactMobile">
        Ta kontakt på epost bjoern@bjoernsagstad.com eller tlf: 984 53 145
        så finner vi en løsning for deg.
        </div>
        </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default ClientC;
