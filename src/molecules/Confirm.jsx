import styled from "styled-components";
import { Input } from "../atoms/input/Input";
import { Label } from "../atoms/label/Label";

export const Confirm = (props) => {
  const { value,title } = props;
  return (
    <StyledNameArea>
      <div>{title}</div>
      <Label text={value} />
    </StyledNameArea>
  );
};

const StyledNameArea = styled.div`
  padding: 10px 0px;
`;
