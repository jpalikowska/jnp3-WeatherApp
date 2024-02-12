import { GridWrapper } from './GridWrapper';
import ChartChooser from '../ChartChooser';
import ChartItem from '../ChartTypes';

function Grid() {
    return (
        <GridWrapper>
            <div className="item1"><ChartChooser/></div>
            <div className="item2"><ChartItem/></div>
        </GridWrapper>
    );
}

export default Grid;