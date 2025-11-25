import styled from "styled-components";

export const Title = () => {
  return (
    <Container>
      <StyledIcon src="/icon.png"/>
      <StyledTitle>Kintone問い合わせ</StyledTitle>
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

const StyledTitle=styled.div`
  font-size: 25px;
  font-weight: bold;
` 