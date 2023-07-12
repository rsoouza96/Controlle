import { StyledContainer, StyledDiv, StyledSlider } from './style'
import currencyFormater from '../../utils/currencyFormater'
import { useDispatch, useSelector } from 'react-redux'
import { valueFilter } from '../../store/actions'

const ValueFilter = () => {
    const dispatch = useDispatch()
    const { dinamicValues, fixedValues } = useSelector(state => state.filters);

    const handleChange = (event, newValue) => {
        dispatch(valueFilter(newValue[0], newValue[1]))
    };

    return (
        <StyledContainer>
            <StyledSlider
                size="small"
                value={[dinamicValues.minValue, dinamicValues.maxValue]}
                onChange={handleChange}
                step={10}
                min={fixedValues.minValue}
                max={fixedValues.maxValue}
            />
            <StyledDiv>
                <span>{ currencyFormater(dinamicValues.minValue) }</span><span>{ currencyFormater(dinamicValues.maxValue) }</span>
            </StyledDiv>
        </StyledContainer>
    )
}

export default ValueFilter
