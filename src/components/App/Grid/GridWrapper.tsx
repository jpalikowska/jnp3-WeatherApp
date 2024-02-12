import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-areas:
      'map loc filter'
      'map chart chart';
    gap: 10px;
    padding: 10px;
    grid-template-columns: 5fr 100px 3fr;
    grid-template-rows: 2fr 3fr;
    width: 100%;
    height: 500px;

    .item1 { grid-area: map; }
    .item2 { grid-area: loc;  justify-content: center; align-content: center;}
    .item3 { grid-area: filter; }
    .item4 { grid-area: chart; }
`;