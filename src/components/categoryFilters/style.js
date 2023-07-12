import styled from 'styled-components'

export const StyledDiv = styled.div `
    width: ${({width}) => width};;
    display: flex;
    justify-content: ${({flex}) => flex};
    height: ${({height}) => height};
    gap: ${({gap}) => gap};
    align-items: flex-end;
`

export const StyledButton = styled.button `
    width: 150px;
    border: none;
    background: none;
    color: darkgray;
    font-weight: 600;
`