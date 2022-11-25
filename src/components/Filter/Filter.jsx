import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { FilterWrapper, FilterLabel, InputFilterField } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterInputId = shortid.generate();

  const filterHandler = e => {
    e.preventDefault();
    dispatch(setFilter(e.currentTarget.value.trim()));
  };

  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <InputFilterField
        id={filterInputId}
        onChange={filterHandler}
        type="text"
        name="filter"
        title="Filter by name"
      />
    </FilterWrapper>
  );
};

export default Filter;
