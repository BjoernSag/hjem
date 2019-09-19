import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-lightbox/style.css';
import React, { Component } from 'react';
import {Pager} from 'react-bootstrap';
import ReactPageScroller from "react-page-scroller";
import '.././style.css';
import PortefolioComponent from './PortefolioComponent';
import AboutMeComponent from './AboutMeComponent';
import FourthComponent from './FourthComponent';
import ThirdComponent from './ThirdComponent';
import ClientAFrontPage from './clientFrontPageComponents/ClientAFrontPage';
import ClientBFrontPage from './clientFrontPageComponents/ClientBFrontPage';
import ClientCFrontPage from './clientFrontPageComponents/ClientCFrontPage';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from './responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from './responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from './responsive_utilities/phoneEvenSmaller_breakpoint';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      activePage: 1,
    }
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  }


  pageOnChange = (number) => {
    this.setState(
      {
        currentPage: number,
        activePage: number
      });
    }

    getPagesNumbers = () => {

      const pageNumbers = [];
      const names = ['', 'Om meg','Portefolio', 'Kontakt', 'Pris'];

      //setting activePage so we can style it
      var activePageClass = 'active';
      let i = 1;
      for (i; i <= 4; i++) {
        if(this.state.activePage===i){
          activePageClass = 'active';
        }else{
          activePageClass = 'inactive';
        }
        //Push the pages onto the stack, so we can use the links later to navigate
        pageNumbers.push(
          <Pager.Item key={i} className={activePageClass} eventKey={i - 1} onSelect={this.goToPage}>{names[i]}</Pager.Item>
        )
      }

      return [...pageNumbers];
    }

    render() {
      const pagesNumbers = this.getPagesNumbers();

      return <React.Fragment>
        <DesktopBreakpoint>
          <ReactPageScroller animationTimer={850} ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <AboutMeComponent />
            <PortefolioComponent  />
            <ThirdComponent />
            <FourthComponent />
          </ReactPageScroller>
          <pager className="pagination-alternative-class">
            <span>{pagesNumbers}</span>
          </pager>
        </DesktopBreakpoint>

        <TabletBreakpoint>
          <ReactPageScroller animationTimer={850} ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <AboutMeComponent />
            <PortefolioComponent />
            <ThirdComponent />
            <FourthComponent />
          </ReactPageScroller>
          <pager className="pagination-alternative-class">
            <span>{pagesNumbers}</span>
          </pager>
        </TabletBreakpoint>

        <LandScapeBreakpoint>
          <ReactPageScroller animationTimer={850} ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <AboutMeComponent />
            <PortefolioComponent />
            <ThirdComponent />
            <FourthComponent />
          </ReactPageScroller>
        </LandScapeBreakpoint>

        <PhoneBreakpoint>
          <ReactPageScroller animationTimer={850} ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <AboutMeComponent />
            <ClientAFrontPage />
            <ClientBFrontPage />
            <ClientCFrontPage />
            <ThirdComponent />
            <FourthComponent />
          </ReactPageScroller>
          <pager className="pagination-alternative-class-phone">
            <span>{pagesNumbers}</span>
          </pager>
        </PhoneBreakpoint>
        <PhoneSmallerBreakpoint>
          <ReactPageScroller animationTimer={850} ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <AboutMeComponent />
            <ClientAFrontPage />
            <ClientBFrontPage />
            <ClientCFrontPage />
            <ThirdComponent />
            <FourthComponent />
          </ReactPageScroller>
        </PhoneSmallerBreakpoint>


        <PhoneEvenSmallerBreakpoint>
        <ReactPageScroller animationTimer={850} ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
          <AboutMeComponent />
          <ClientAFrontPage />
          <ClientBFrontPage />
          <ClientCFrontPage />
          <ThirdComponent />
          <FourthComponent />
        </ReactPageScroller>
        </PhoneEvenSmallerBreakpoint>
      </React.Fragment>
    }
  }

  export default App;
