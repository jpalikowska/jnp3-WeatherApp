import { useDispatch } from 'react-redux';
import { SearchFilterWrapper } from './SearchFilterWrapper';
import { addNameFilter } from '../../../forecast/reducer';
import { SearchButtonWrapper } from './SearchButtonWrapper';

function SearchFilter() {
  const dispatch = useDispatch();

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            dispatch(addNameFilter(e.target.value));
        }
    }
    const handleClick = () => {
      dispatch(addNameFilter(document.getElementById('filter').value));
    }
    return (
      <>
      <SearchFilterWrapper id="filter" onKeyUp={(e) => handleKeyPress(e)} />
      <SearchButtonWrapper onClick={handleClick}>Add</SearchButtonWrapper>
      </>
    )
  }

export default SearchFilter;