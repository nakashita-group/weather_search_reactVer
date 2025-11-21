import styled from "styled-components";

export const Button=(props)=>{
    const {text,onClick}=props;
    return(
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}

const StyledButton=styled.button`
        background-color:#FFFF66;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 15px;
        `