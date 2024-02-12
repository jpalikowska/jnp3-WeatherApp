import { useSelector } from 'react-redux';
import { displayedCitiesDataSelector } from '../../../forecast/selectors';
import { CartesianGrid , BarChart, XAxis, YAxis, Legend, Bar } from 'recharts';

function formatYAxis(value: number) {
    switch(value) {
      case 2:
        return "nice";
      case 1:
        return "passable";
      case 0:
        return "not nice";
      default:
        return ""
    }
  }

function NiceChart () {
    const citiesData = useSelector(displayedCitiesDataSelector);
    return (
        <BarChart width={530} height={300} data={citiesData}>
            <CartesianGrid strokeDasharray="6 6" />
            <XAxis dataKey={"name"} padding={{ right: 10, left: 10}} style={{fontSize: '0.6rem'}} angle={-45} dy={10}/>
            <YAxis tickFormatter={formatYAxis} domain={[0,2]} style={{fontSize: '0.6rem'}}/>
            <Bar dataKey="niceness" fill="#8884d8" />
            <Legend/>
            </BarChart>
    );
}

export default NiceChart;