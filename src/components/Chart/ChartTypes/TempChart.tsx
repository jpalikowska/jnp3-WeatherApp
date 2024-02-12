import { useSelector } from 'react-redux';
import { displayedCitiesDataSelector } from '../../../forecast/selectors';
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Line, Legend } from 'recharts';


function TempChart () {
    const cities = useSelector(displayedCitiesDataSelector);
    return (
        <LineChart width={530} height={300} data={cities}>
                    <CartesianGrid strokeDasharray="6 6" />
                    <XAxis dataKey={"name"} padding={{ right: 10, left: 10}} style={{fontSize: '0.6rem'}} angle={-45} dy={10}/>
                    <YAxis dataKey={"temp_c"} domain={[-20, 50]} type="number" style={{fontSize: '0.6rem'}}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temp_c" stroke="#8884d8" strokeWidth={3} isAnimationActive={false}/>
        </LineChart>
    );
}

export default TempChart;