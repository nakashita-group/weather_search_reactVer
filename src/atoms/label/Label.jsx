import styled from "styled-components";

export const Label=(props)=>{
    const {text}=props;
    return(
        <StyledLabel>{text}</StyledLabel>
    )
}

const StyledLabel=styled.div`
        padding:10px ;
        border: 2px solid black;
        width:200px;
        `;