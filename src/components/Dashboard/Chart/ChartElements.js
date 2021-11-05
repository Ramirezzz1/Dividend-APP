import styled from 'styled-components'

export const DashContainer = styled.div`
min-height: 692px;
 position: fixed;
 bottom: 0;
 left: 0;
 right:0;
 top:0;
 z-index: 0;
 overflow: hidden;
 background: linear-gradient(
     108deg,
     rgba(1,147,86,1) 0%,
     rgba(10,201,122,1) 100%
 );
 `;

 export const DashWrap = styled.div`
 display: grid;
 z-index: 1;
 height: 860px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 padding: 0 24px;
 justify-content: center;
 align-items: center;

 `;

 export const ChartWrap = styled.div`
 display: grid;
grid-auto-columns; minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width:768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`;

export const PlotColumn = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const TableColumn = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
