import styled from "styled-components";

export const Input=(props)=>{
    const {value,placeholder="",width="200px",onChange}=props;

    return(
        <StyledInput onChange={onChange} 
        value={value}
        placeholder={placeholder}
        $width={width}/>
    )
}


const StyledInput = styled.input`
  border-radius: 5px;
  width: ${(props) => props.$width};
`;

