import styled from "styled-components";

export const Label=(props)=>{
    const {text}=props;
    return(
        <label>{text}</label>
    )
}

const StyledButton=styled.button`
        padding: 5px 10px;
        border-radius: 15px;
        `;