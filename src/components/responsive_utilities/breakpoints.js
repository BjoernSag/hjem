import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
 desktop: '(min-width: 1025px)',
 tablet: '(min-width: 751px) and (max-width: 1024px)',
 phone: '(min-width: 751px) and(max-width: 767px)',
 phoneSmaller: '(min-width:401px) and (max-width:750px) and (orientation : portrait)',
 phoneEvenSmaller : '(max-width:400px) and (orientation : portrait)',
 landscape : '(max-width:750px) and (orientation: landscape)',
};

export default function Breakpoint(props) {
 const breakpoint = breakpoints[props.name] || breakpoints.desktop;
return (
 <MediaQuery {...props } query={breakpoint}>
 {props.children}
 </MediaQuery>
 );
}
React.propTypes = {
 name: String,
 children: Object,
}
