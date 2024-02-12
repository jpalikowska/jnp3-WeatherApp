import { GridWrapper } from './GridWrapper';
import Map from '../../Map';
import Location from '../../Location';
import FilterBar from '../../FilterBar';
import Chart from '../../Chart';

function Grid() {
    return (
        <GridWrapper>
            <div className="item1"><Map/></div>
            <div className="item2"><Location/></div>
            <div className="item3"><FilterBar/></div>  
            <div className="item4"><Chart/></div>
        </GridWrapper>
    );
}

export default Grid;