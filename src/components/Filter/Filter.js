import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice/fiterSlice';
import { Container, InputeFilter } from './Filter.styled';
function Filter() {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Container>
      <InputeFilter
        autoComplete="off"
        placeholder="Find contacts by name"
        name="filter"
        type="text"
        onChange={handleChange}
      />
    </Container>
  );
}

export default Filter;
