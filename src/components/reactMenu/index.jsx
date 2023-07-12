import { Menu, MenuItem } from '@szhsin/react-menu'
import { StyledButton } from './style'

const ReactMenu = ({ items, selectedFilters, getItemProps }) => {
    return (
        <Menu menuButton={<StyledButton>+</StyledButton>} transition>
            {items.filter( item =>
                !selectedFilters.find(({ id }) => id === item.id)
                ).map( item => <MenuItem {...getItemProps({
                    item,
                    key: item.id
                })}>{ item.name }</MenuItem> )}
        </Menu>
    )
}

export default ReactMenu
