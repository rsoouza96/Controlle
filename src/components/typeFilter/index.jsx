import { ControlledMenu, MenuItem, useClick } from '@szhsin/react-menu'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '@szhsin/react-menu/dist/index.css'
import { typeFilter } from '../../store/actions'
import { StyledButton, StyledLabel } from './style'

const TypeFilter = () => {
    const dispatch = useDispatch()
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const { type } = useSelector(state => state.filters)
    const anchorProps = useClick(isOpen, setOpen);

    const handleSelect = (button, filter) => {
        dispatch(typeFilter(filter))
    }
  
    return (
      <>
        <StyledLabel>
          <p>Tipo:</p>
            <StyledButton  ref={ref} {...anchorProps}>
              {type === "All" ? "Entrada/Saída" : type === "Entry" ? "Entrada" : "Saída"}
            </StyledButton>
        </StyledLabel>
  
        <ControlledMenu
          state={isOpen ? 'open' : 'closed'}
          anchorRef={ref}
          onClose={() => setOpen(false)}
        >
          <MenuItem onClick={() => handleSelect("Entrada/Saída", "All")}>Entrada/Saída</MenuItem>
          <MenuItem onClick={() => handleSelect("Entrada", "Entry")}>Entrada</MenuItem>
          <MenuItem onClick={() => handleSelect("Saída", "Out")}>Saída</MenuItem>
        </ControlledMenu>
      </>
    );
}

export default TypeFilter
