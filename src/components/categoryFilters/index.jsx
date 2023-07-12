import SelectedCategoryFilters from '../selectedCategoryFilters'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '@szhsin/react-menu/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilters } from '../../store/actions'
import ReactMenu from '../reactMenu'
import Downshift from 'downshift'
import { useState } from 'react'
import { StyledButton, StyledDiv } from './style'

const CategoryFilters = ({ items }) => {
    const dispatch = useDispatch()
    const [selectedFilters, setSelectedFilters] = useState([]);
    const filters = useSelector(state => state.filters);
    const changeHandler = () => {
        return (selectedItem, downshift) => {
            if (!selectedItem) return;
            const i = selectedFilters.findIndex(item => item.id === selectedItem.id);
            if (i === -1) setSelectedFilters([...selectedFilters, selectedItem]);
            downshift.clearSelection();
        };
    }
    
    const removeSelectedItem = id => {
        setSelectedFilters( selectedFilters.filter(item => item.id !== id) )
    }

    const saveFilters = () => localStorage.setItem('@CONTROLLE_FILTERS', JSON.stringify(filters))

    return (
        <Downshift onChange={changeHandler()}>
            {({
                getRootProps,
                getItemProps,
                getToggleButtonProps,
                clearSelection,
                selectedItem,
            }) => {
                return (
                    <StyledDiv width="100%" {...getRootProps({}, {suppressRefError: true})}>
                        <StyledDiv width="100%" gap='25px' flex='flex-start'>
                            <SelectedCategoryFilters selectedFilters={ selectedFilters } removeSelectedItem={ removeSelectedItem } />
                            
                            <ReactMenu items={ items } selectedFilters={ selectedFilters } getItemProps={ getItemProps } {...getToggleButtonProps()} />
                        </StyledDiv>

                        {selectedItem || selectedFilters.length > 0 ? (
                            <StyledDiv flex='flex-end' width="auto">
                                <StyledButton
                                    onClick={() => {
                                        setSelectedFilters([]);
                                        clearSelection();
                                        dispatch(clearFilters())
                                    }}
                                >
                                    Zerar filtros
                                </StyledButton>
                                <StyledButton
                                    className="button-primary"
                                    onClick={ saveFilters }
                                >
                                    Salvar filtros
                                </StyledButton>
                            </StyledDiv>
                        ) 
                        : 
                        null}
                    </StyledDiv>
                );
            }}
        </Downshift>
    );
};


export default CategoryFilters
