import styled from "styled-components";

export const Title = () => {
  return (
    <Container>
      <StyledIcon src="/icon.png"/>
      <h1>Kintone問い合わせ</h1>
    </Container>
  );
};

const StyledIcon = styled.img`
  border-radius: 50px;
  width:80px;
  height:80px;
`;

const Container = styled.div`
  display: flex;     
  align-items: center; 
  gap: 10px;           
  margin:20px;
  justify-content: center;
`;