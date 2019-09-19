import React, { Component } from 'react';
import '.././buttonStyle.scss';
import "animate.css/animate.min.css";
import Trend from 'react-trend';
import VisibilitySensor from 'react-visibility-sensor';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from './responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from './responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from './responsive_utilities/phoneEvenSmaller_breakpoint';
import Header from './Header';

class SecondComponent extends Component{
  constructor (){
    super();
    this.state = {
      backgroundcolor : "component secondComponent",
    }
    this.animation2 = this.animation2.bind(this);
    this.animationSmallMobile = this.animationSmallMobile.bind(this);
  }



  animation2 = () => {
    return <Trend
            className="centered"
            smooth
            autoDraw
            autoDrawDuration={3000}
            autoDrawEasing="ease-out"
            data={[-20,-16,-12, -17,-6,0,5,-4,-8,-15,0,2,-5,2,4,6,9]}
            gradient={['#00c6ff', '#F0F', '#FF0']}
            radius={10}
            strokeWidth={2}
            strokeLinecap={'butt'}
          />
  }
  animationSmallMobile = () => {
    return <Trend
            className="animationSmallMobile"
            smooth
            autoDraw
            autoDrawDuration={3000}
            autoDrawEasing="ease-out"
            data={[-20,-16,-12, -17,-6,0,5,-4,-8,-15,0,2,-5,2,4,6,9]}
            gradient={['#00c6ff', '#F0F', '#FF0']}
            radius={10}
            strokeWidth={4}
            strokeLinecap={'butt'}
          />
  }

  render(){
    var contactOpacityStyle = {
      opacity: '0.01',
      position: 'absolute',
      fontSize: '180px',
      left: '10%',
      top: '25%',
      letterSpacing: '30px',
    };

    var nameStyle = {
      position: 'absolute',
      top: '10%',
      left: '10%',
      width: '33%',
    };

    var nameStyleMobile = {
      position: 'absolute',
      top: '10%',
      left: '10%',
      width: '33%',
      fontSize: '25px',
    };
    var nameStyleMobileSmaller = {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '40%',
      fontSize: '25px',
    };

    var blurbStyle = {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '33%',
    };

    var blurbStyleTablet = {
      position: 'absolute',
      top: '30%',
      left: '10%',
      width: '33%',
    };

    var blurbStyleMobile = {
      position: 'absolute',
      top: '24%',
      left: '10%',
      width: '33%',
      fontSize: '15px',
    };
    var blurbStyleSmallerMobile = {
      position: 'absolute',
      top: '40%',
      left: '10%',
      width: '33%',
      fontSize: '15px',
    };

    var readMoreButtonStyle = {
      position: 'absolute',
      top: '22%',
      left: '55%',
    }

    var ae = {
      color: 'black',
    }
    var lesMerMobile = {
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
    var tibit = {
      position: 'relative',
      top: '23%',
      left: '2%',
    }

    return (
      <div className={this.state.backgroundcolor}>

        <DesktopBreakpoint>
        <VisibilitySensor>
          {({isVisible}) =>
            <div>
              &nbsp;
              {isVisible ? this.animation2() : ""}
              {isVisible ?
              <div>
            <Header />
              <h1 style={contactOpacityStyle}>Om meg</h1>
              <h1 style={nameStyle}>Bjørn Ove Sagstad</h1>
              <h5 style={blurbStyle}>Freelance webdesigner og utvikler</h5>

              <div className="container2" style={readMoreButtonStyle}>
                    <a style={ae}
                      className="animated-arrow"
                      href="/about"
                      target="_blank">
                      <span className="the-arrow -left">
                        <span className="shaft">
                        </span>
                      </span>
                      <span className="main">
                        <span className="textLesMer">
                          Les mer
                        </span>
                        <span className="the arrow -right">
                          <span className="shaft">
                          </span>
                        </span>
                      </span>
                    </a>
              </div>
              </div> : ""}

            </div>
          }
        </VisibilitySensor>
        </DesktopBreakpoint>
        <TabletBreakpoint>
        <VisibilitySensor partialVisibility={true}>
          {({isVisible}) =>
            <div>
              &nbsp;
              {isVisible ? this.animation2() : ""}
              {isVisible ?
              <div>
              <Header />
              <h1 style={contactOpacityStyle}>Om meg</h1>
              <h1 style={nameStyle}>Bjørn Ove Sagstad</h1>
              <h5 style={blurbStyleTablet}>Freelance webdesigner og utvikler</h5>

              <div className="container2" style={readMoreButtonStyle}>
                    <a style={ae}
                      className="animated-arrow"
                      href="/about"
                      target="_blank">
                      <span className="the-arrow -left">
                        <span className="shaft">
                        </span>
                      </span>
                      <span className="main">
                        <span className="textLesMer">
                          Les mer
                        </span>
                        <span className="the arrow -right">
                          <span className="shaft">
                          </span>
                        </span>
                      </span>
                    </a>
              </div>
              </div> : ""}
            </div>
          }
        </VisibilitySensor>
        </TabletBreakpoint>
        <PhoneBreakpoint>
        <VisibilitySensor partialVisibility={true}>
          {({isVisible}) =>
            <div>
              &nbsp;
              {isVisible ? this.animation2() : ""}
              {isVisible ?
              <div>
              <h1 style={nameStyleMobile}>Bjørn Ove Sagstad</h1>
              <h5 style={blurbStyleMobile}>Freelance webdesigner og utvikler</h5>

              <div className="container2" style={readMoreButtonStyle}>
                    <a style={ae}
                      className="animated-arrow"
                      href="/about"
                      target="_blank">
                      <span className="the-arrow -left">
                        <span className="shaft">
                        </span>
                      </span>
                      <span className="main">
                        <span className="textLesMer">
                          Les mer
                        </span>
                        <span className="the arrow -right">
                          <span className="shaft">
                          </span>
                        </span>
                      </span>
                    </a>
              </div>
              </div> : ""}
            </div>
          }
          </VisibilitySensor>
        </PhoneBreakpoint>
        <PhoneSmallerBreakpoint>
        <div className="secondMobileComponent">
        <VisibilitySensor partialVisibility={true}>
          {({isVisible}) =>
            <div>
              &nbsp;
              {isVisible ? this.animation2() : ""}

              <div>
              <h1 style={nameStyleMobile}>Bjørn Ove Sagstad</h1>
              <h5 style={blurbStyleMobile}>Freelance webdesigner og utvikler</h5>

              <div className="container2" style={readMoreButtonStyle}>
                    <a style={lesMerMobile}
                      className="animated-arrow"
                      href="/about"
                      target="_blank">
                      <span className="the-arrow -left">
                        <span className="shaft">
                        </span>
                      </span>
                      <span className="main">
                        <span className="textLesMer">
                          Les mer
                        </span>
                        <span className="the arrow -right">
                          <span className="shaft">
                          </span>
                        </span>
                      </span>
                    </a>
              </div>
              </div>
            </div>
          }
          </VisibilitySensor>
          </div>
        </PhoneSmallerBreakpoint>
        <LandScapeBreakpoint>
        <VisibilitySensor partialVisibility={true}>
          {({isVisible}) =>
            <div>
              &nbsp;
              {isVisible ? this.animation2() : ""}
              <div>
              <h1 style={nameStyleMobile}>Bjørn Ove Sagstad</h1>
              <h5 style={blurbStyleMobile}>Freelance webdesigner og utvikler</h5>

              <div className="container2" style={readMoreButtonStyle}>
                    <a style={ae}
                      className="animated-arrow"
                      href="/about"
                      target="_blank">
                      <span className="the-arrow -left">
                        <span className="shaft">
                        </span>
                      </span>
                      <span className="main">
                        <span className="textLesMer">
                          Les mer
                        </span>
                        <span className="the arrow -right">
                          <span className="shaft">
                          </span>
                        </span>
                      </span>
                    </a>
              </div>
              </div>
            </div>
          }
          </VisibilitySensor>
        </LandScapeBreakpoint>
        <PhoneEvenSmallerBreakpoint>
        <div className="secondMobileComponent">
        <p style={tibit}>Hvem er jeg?</p>
        <h1 style={titleMobile}>Bjørn Ove Sagstad</h1>
        <h5 style={underTitleMobile}>Webdesigner og utvikler</h5>

        <VisibilitySensor partialVisibility={true}>
          {({isVisible}) =>
            <div>
              &nbsp;
              {isVisible ? this.animationSmallMobile() : ""}
              <div>
              <div className="container2" style={readMoreButtonStyle}>
                    <a style={lesMerMobile}
                      className="animated-arrow"
                      href="/about"
                      target="_blank">
                      <span className="the-arrow -left">
                        <span className="shaft">
                        </span>
                      </span>
                      <span className="main">
                        <span className="textLesMer">
                          Les mer
                        </span>
                        <span className="the arrow -right">
                          <span className="shaft">
                          </span>
                        </span>
                      </span>
                    </a>
              </div>
              </div>
            </div>
          }
          </VisibilitySensor>
          </div>
        </PhoneEvenSmallerBreakpoint>
      </div>
    );
}}

export default SecondComponent;
