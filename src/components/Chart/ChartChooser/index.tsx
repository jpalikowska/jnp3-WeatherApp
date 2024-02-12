import { ChartChooserWrapper } from './ChartChooserWrapper';

import { useDispatch } from 'react-redux';
import { CHART_TYPE } from '../../../forecast/const'
import { chooseChart } from '../../../forecast/reducer';

function ChartChooser() {
    const dispatch = useDispatch();

    const onChartChange = (event: any) => {
        const type = event.target.value;
        dispatch(chooseChart(type));
    }

    return (
        <ChartChooserWrapper>
            <button id='temp' value={CHART_TYPE.TEMP} onClick={onChartChange}>Temperature</button>
            <button id='press' value={CHART_TYPE.PRESS} onClick={onChartChange}>Pressure</button>
            <button id='nice' value={CHART_TYPE.NICE} onClick={onChartChange}>Niceness</button>
        </ChartChooserWrapper>
    )
  }

export default ChartChooser;