import React from 'react';
import Breakpoint from './breakpoints';
export default function PhoneEvenSmallerBreakpoint(props) {
 return (
 <Breakpoint name='phoneEvenSmaller'>
 {props.children}
 </Breakpoint>
 );
}
