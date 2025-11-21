import styled from "styled-components";
import { Input } from "../atoms/input/Input";

export const NameInput = (props) => {
  const { value, onChange } = props;
  return (
    <StyledNameArea>
      <div>お名前</div>
      <Input
        value={value}
        placeholder="お名前を入力してください"
        onChange={onChange}/>
    </StyledNameArea>
  );
};

const StyledNameArea = styled.div`
  padding:10px 0px;
  `;

