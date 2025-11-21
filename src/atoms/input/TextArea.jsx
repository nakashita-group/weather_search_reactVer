import styled from "styled-components";

export const TextArea=(props)=>{
    const {value,onChange}=props;

    return(
        <StyledInput onChange={onChange} 
        value={value}
        placeholder="こちらにお問い合わせ内容を入力してください"
        cols={45}
        rows={10}/>
    )
}

const StyledInput=styled.textarea`
    border-radius: 5px;
        `

