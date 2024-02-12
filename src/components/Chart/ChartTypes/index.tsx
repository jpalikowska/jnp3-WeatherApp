import TempChart from './TempChart';
import PressChart from './PressChart';
import NiceChart from './NiceChart';

import { useSelector } from 'react-redux';
import { chartSelector } from '../../../forecast/selectors';

function renderChart(type: string) {
    switch(type) {
        case 'temp':
          return <TempChart/>;
        case 'press':
            return <PressChart/>;
        case 'nice':
            return <NiceChart/>;
        default:
          return '';
      }
}

function ChartItem () {
    const type = useSelector(chartSelector);
    return (
        renderChart(type)
    );
}

export default ChartItem;