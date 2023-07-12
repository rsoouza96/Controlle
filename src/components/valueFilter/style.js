import { Slider } from "@mui/material";
import { styled } from "styled-components";

export const StyledContainer = styled.div `
    width: 150px;
`

export const StyledSlider = styled(Slider)`
    width: 35px;
`

export const StyledDiv = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 12px;
    }
`