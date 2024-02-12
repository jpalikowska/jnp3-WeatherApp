import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-areas:
      'chooser'
      'chart';
    gap: 10px;
    padding: 10px;
    grid-template-rows: 30px 1fr;
    width: 100%;
    height: 100%;

    .item1 { grid-area: chooser; place-self: center;}
    .item2 { grid-area: chart;}
`;