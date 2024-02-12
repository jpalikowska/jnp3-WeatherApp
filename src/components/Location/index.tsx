import { useDispatch } from 'react-redux';
import { LocationWrapper } from './LocationWrapper';
import { centerOnUserLocation } from '../../forecast/reducer';

function Location() {
  const dispatch = useDispatch();

  const centerOnLocation = () =>  {
    dispatch(centerOnUserLocation())
  };

    return (
      <LocationWrapper onClick={centerOnLocation}>Location</LocationWrapper>
    )
  }

export default Location;