import styled from 'styled-components'


export const StyledUl = styled.ul `
    display: ${({display}) => display};
    list-style: none;
    position: absolute;
    background-color: white;
    padding: 15px 25px;
    border: 1px solid #dadada;
    border-radius: 5px;
    cursor: pointer;
    input {
        margin-right: 5px;
    }
`

export const StyledLi = styled.li `
    display: flex;
    margin: 5px 0;
`

export const StyledDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    padding: 2px 5px;
    gap: 0 10px;
    border: 1px solid #dadada;
    border-radius: 5px;
    background: none;
    cursor: pointer;
    
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 5px;
        font-size: 13px;
    }
`
export const StyledOption = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 5px;
    font-size: 13px;

    p { 
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 5px;
        font-size: 13px;
    }
`