import styled from "styled-components";
import { Input } from "../atoms/input/Input";
import { TextArea } from "../atoms/input/TextArea";

export const InquireInput = (props) => {
  const { value, onChange } = props;
  return (
    <StyledInquireArea>
      <div>お問い合わせ内容</div>
      <TextArea
        value={value}
        placeholder="お問い合わせ内容を入力してください"
        onChange={onChange}/>
    </StyledInquireArea>
  );
};

const StyledInquireArea = styled.div`
  padding:10px 0px;
`;
