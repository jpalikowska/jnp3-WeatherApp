import styled from 'styled-components';
import { theme } from 'styled-tools';

export const ChartChooserWrapper = styled.div`
    display: inline-flex;
    border: 1px solid ${theme('colors.border')};
    border-radius: 4px;
    overflow: hidden;
    margin: 4px;
    button {
        padding: 8px 12px;
        outline: none;
        border: none;
        cursor: pointer;
        border-right: 1px solid ${theme('colors.border')};
        background: ${theme('colors.background')};
    }
    button:last-child {
        border-right: none;
    }
    button:hover {
        background: ${theme('colors.chart_button_hover_background')};
    }
    .chosen {
        background: ${theme('colors.chart_button_hover_background')};
    }
`;