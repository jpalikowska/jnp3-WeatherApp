import styled from 'styled-components';
import { theme } from 'styled-tools';

export const LocationWrapper = styled.button`
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid ${theme('colors.border')};
border-radius: 5px;
cursor: pointer;
background-color: ${theme('colors.button_background')}
`;