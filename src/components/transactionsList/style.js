import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 15px;
    align-items: flex-end;
    flex-wrap: wrap;
`

export const StyledCard = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #dadada;
    justify-content: center;
    border-radius: 5px;
    width: 30%;
    height: 150px;
    gap: 7px 0;

    @media (max-width: 800px) {
        width: 50%;
    }
    @media (max-width: 550px) {
        width: 100%;
    }
`

export const StyledCardHeader = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const StyledType = styled.p `
    border: 1px solid ${(({type}) => type === "Entry" ? "green" : "red")};
    border-radius: 5px;
    padding: 3px 5px;
    color: ${(({type}) => type === "Entry" ? "green" : "red")};
`

export const StyledTagsContainer = styled.div `
    display: flex;
    gap: 0 5px;

    p {
        border: 1px solid #dadada;
        padding: 3px 5px;
        border-radius: 5px;
    }
`