import styled from 'styled-components'
import {Link} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const Button = styled(Link)`
 border-radius: 50px;
 background: ${({primary}) => (primary ? '#01BF71' : '#010606')}
 white-space: nowrap;
 padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
 color: ${({dark}) => (dark ? '#01BF71' : '#01BF71')};
 font-size; ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;

 &:hover {
     transtion: all 0.2s ease-in-out;
     background: ${({primary}) => (primary ? '#01BF71' : '#01BF71' )}; 
 }
`;

export const Button2 = styled(LinkR)`
 border-radius: 50px;
 background: ${({primary}) => (primary ? '#01BF71' : '#010606')}
 white-space: nowrap;
 padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
 color: ${({dark}) => (dark ? '#01BF71' : '#01BF71')};
 font-size; ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;

 &:hover {
     transtion: all 0.2s ease-in-out;
     background: ${({primary}) => (primary ? '#01BF71' : '#01BF71' )}; 
 }
`;