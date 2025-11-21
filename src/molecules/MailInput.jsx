import styled from "styled-components";
import { Input } from "../atoms/input/Input";

export const MailInput = (props) => {
  const { value, onChange } = props;
  return (
    <StyledMailArea>
      <div>メールアドレス</div>
      <Input
        value={value}
        placeholder="メールアドレスを入力してください"
        onChange={onChange}
        width="300px"/>
    </StyledMailArea>
  );
};

const StyledMailArea = styled.div`
  padding:10px 0px;
`;

