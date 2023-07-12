import { StyledLi, StyledDiv, StyledUl, StyledOption } from './style'
import { addFilter, removeFilter } from '../../store/actions'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { useSelect } from 'downshift'
import FlexIcon from '../icons/flexIcon'


const MultipleSelection = ({ options, label, categoryFilter }) => {
    const dispatch = useDispatch()
    const [selectedItems, setSelectedItems] = useState([])
    const [animation, setAnimation] = useState(true)

    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getItemProps,
    } = useSelect({
      items: options,
      selectedItem: null,
      onSelectedItemChange: ({selectedItem}) => {
        if (!selectedItem) {
          return
        }

        const index = selectedItems.indexOf(selectedItem)

        if (index > 0) {
          setSelectedItems([
            ...selectedItems.slice(0, index),
            ...selectedItems.slice(index + 1),
          ])
          dispatch(removeFilter(selectedItem.name, categoryFilter))
        } else if (index === 0) {
          setSelectedItems([...selectedItems.slice(1)])
          dispatch(removeFilter(selectedItem.name, categoryFilter))
        } else {
          setSelectedItems([...selectedItems, selectedItem])
          dispatch(addFilter(selectedItem.name, categoryFilter))
        }
      },
    })

      return (
        <div>
          <div className="w-72 flex flex-col gap-1">
            <label {...getLabelProps()}>{ label }</label>
            <StyledDiv {...getToggleButtonProps()}>
              {selectedItems.map(item => <span key={item.id}><FlexIcon name={item.name} /> {item.name}</span>)}
            </StyledDiv>
          </div>
          <StyledUl display={isOpen ? null : 'none'} {...getMenuProps()}>
            {isOpen &&
              options.map((item, index) => (
                <StyledLi
                  key={`${item.id}`}
                  {...getItemProps({
                    key: item.id,
                    item,
                    index
                  })}
                >
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={selectedItems.includes(item)}
                    value={item}
                    onChange={() => null}
                  />
                  <StyledOption>
                    <p><FlexIcon name={item.name} /> {item.name}</p>
                  </StyledOption>
                </StyledLi>
              ))}
          </StyledUl>
        </div>
      )
};

export default MultipleSelection;