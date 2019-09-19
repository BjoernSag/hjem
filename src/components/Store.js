import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import '.././style.css';
import '.././spinnerStyle.scss';
import App from './App';
import Header from './Header';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import PhoneSmallerBreakpoint from './responsive_utilities/phoneSmaller_breakpoint';
import LandScapeBreakpoint from './responsive_utilities/landscape_breakpoint';
import PhoneEvenSmallerBreakpoint from './responsive_utilities/phoneEvenSmaller_breakpoint';
import AboutComponent from './AboutComponent';
import MenuComponent from './MenuComponent';
import ClientA from './clientComponents/ClientA';
import ClientB from './clientComponents/ClientB';
import ClientC from './clientComponents/ClientC';
import Coming from './ComingSoonComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import 'react-app-polyfill/ie11';
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import 'core-js/fn/number/is-nan';

class Store extends Component {
  constructor() {
    super();
    this.content = this.content.bind(this);
  }

  componentDidMount() {
    this.props.hideLoader();
  }

  content = () => {
    return <div id="outer-container">
    <MenuComponent pageWrapId={ "page-wrap"} outerContainerId={"outer-container"}/>
    <main id="page-wrap">
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/ClientA" component={ClientA} />
          <Route exact path="/clienta" component={ClientA} />
          <Route exact path="/ClientB" component={ClientB} />
          <Route exact path="/clientb" component={ClientB} />
          <Route exact path="/ClientC" component={ClientC} />
          <Route exact path="/clientc" component={ClientC} />
          <Route exact path="/Coming" component={Coming} />
          <Route component={App} />
        </Switch>
      </div>
      </Router>
      </main>
      </div>
  }

  render() {

      ReactGA.initialize('UA-122662639-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
      return (
        <React.Fragment>
        <DesktopBreakpoint>
          {this.content()}
          </DesktopBreakpoint>
          <TabletBreakpoint>
            {this.content()}
          </TabletBreakpoint>
          <PhoneBreakpoint>
            {this.content()}
          </PhoneBreakpoint>
          <PhoneSmallerBreakpoint>
            {this.content()}
          </PhoneSmallerBreakpoint>
          <LandScapeBreakpoint>
            {this.content()}
          </LandScapeBreakpoint>
          <PhoneEvenSmallerBreakpoint>
          {this.content()}
          </PhoneEvenSmallerBreakpoint>
          </React.Fragment>
        );
    }
  }

  export default Store;
