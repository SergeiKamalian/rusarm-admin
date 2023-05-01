import { StyledInput, StyledSearch } from './styles'
import {FiSearch} from 'react-icons/fi'
const Search = () => {
  return (
    <StyledSearch>
        <StyledInput placeholder='Поиск' />
        <FiSearch color='white' size={20} />
    </StyledSearch>
  )
}

export default Search