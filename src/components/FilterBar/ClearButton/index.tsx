import { useDispatch } from 'react-redux';
import { clearFilters } from '../../../forecast/reducer';
import { ClearButtonWrapper } from './ClearButtonWrapper';


function ClearButton() {
    const dispatch = useDispatch();

    const onClear = () => {
        dispatch(clearFilters());
    }
    return (
      <ClearButtonWrapper onClick={onClear}>Clear all</ClearButtonWrapper>
    )
  }

export default ClearButton;