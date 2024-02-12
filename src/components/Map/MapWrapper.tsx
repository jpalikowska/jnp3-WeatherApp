import styled from 'styled-components';
import { theme } from 'styled-tools';

export const MapWrapper = styled.div`
    width: 100%;
    height: 100%;
    .leaflet-container {
        height: 100%;
        width: 100%;
        border: 1px solid ${theme('colors.border')};
        border-radius: 5px;
      };
      .leaflet-popup-content-wrapper {
        background-color: ${theme('colors.popup_background')}
      };
      .leaflet-popup-tip {
        background-color: ${theme('colors.popup_background')}
      }
`;