import { FilterBarWrapper } from './FilterBarWrapper';
import  ClearButton  from './ClearButton';
import SearchFilter from './SearchFilter';

function FilterBar() {
    return (
        <FilterBarWrapper>
            <SearchFilter />
            <ClearButton />
        </FilterBarWrapper>
    );
}

export default FilterBar;