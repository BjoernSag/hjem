import React from 'react';
import Breakpoint from './breakpoints';
export default function PhoneBreakpoint(props) {
 return (
 <Breakpoint name='landscape'>
 {props.children}
 </Breakpoint>
 );
}
