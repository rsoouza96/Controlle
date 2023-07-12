import CategoryFilters from '../categoryFilters'
import { filterTypes } from '../../../db'
import TypeFilter from '../typeFilter'
import { StyledHeader } from './style'

const FilterContainer = () => {
    return (
        <StyledHeader>
            <TypeFilter />
            <CategoryFilters items={ filterTypes } />
        </StyledHeader>
    )    
}

export default FilterContainer
