import React, { Component } from 'react';
import '.././style.css';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import LandScapeBreakpoint from './responsive_utilities/landscape_breakpoint';
import ClientAFrontPage from './clientFrontPageComponents/ClientAFrontPage';
import ClientBFrontPage from './clientFrontPageComponents/ClientBFrontPage';
import ClientCFrontPage from './clientFrontPageComponents/ClientCFrontPage';


class FirstComponent extends Component {

  render(){

    return (
      <div className="component portefoliComponent">
      <DesktopBreakpoint>
        <div className="cont">
          <div className="dividedColumns">
            <ClientAFrontPage />
          </div>
          <div className="dividedColumns">
            <ClientBFrontPage />
          </div>
          <div className="dividedColumns">
            <ClientCFrontPage />
          </div>
        </div>
      </DesktopBreakpoint>
      <TabletBreakpoint>
      <div className="cont">
        <div className="dividedColumns">
          <ClientAFrontPage />
        </div>
        <div className="dividedColumns">
          <ClientBFrontPage />
        </div>
        <div className="dividedColumns">
          <ClientCFrontPage />
        </div>
      </div>
      </TabletBreakpoint>
      <LandScapeBreakpoint>
      <div className="cont">
        <div className="dividedColumns">
          <ClientAFrontPage />
        </div>
        <div className="dividedColumns">
          <ClientBFrontPage />
        </div>
        <div className="dividedColumns">
          <ClientCFrontPage />
        </div>
      </div>
      </LandScapeBreakpoint>

      </div>
    );
}}

export default FirstComponent;
