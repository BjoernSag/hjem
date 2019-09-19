import React from 'react';
import Breakpoint from './breakpoints';
export default function PhoneSmallerBreakpoint(props) {
 return (
 <Breakpoint name='phoneSmaller'>
 {props.children}
 </Breakpoint>
 );
}
