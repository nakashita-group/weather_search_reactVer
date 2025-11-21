import styled from "styled-components";
import { NameInput } from "../molecules/NameInput";
import { MailInput } from "../molecules/MailInput";
import { InquireInput } from "../molecules/InquireInput";
import { Button } from "../atoms/button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const InputForm = (props) => {
  const { userName } = props;
  const [nameValue, setNameText] = useState("");
  const [mailValue, setMailText] = useState("");
  const [inquireValue, setInquireText] = useState("");
  const navigate = useNavigate();

  const OnNameChange = (e) => {
    setNameText(e.target.value);
  };
  const OnMailChange = (e) => {
    setMailText(e.target.value);
  };
  const OnInquireChange = (e) => {
    setInquireText(e.target.value);
  };

  //確認画面に遷移
  const onClick = () => {
    navigate(`/confirm/${nameValue}/${mailValue}/${inquireValue}`);
  };

  return (
    <StyledForm>
      <StyledInputArea>
        <NameInput value={nameValue} onChange={OnNameChange} />
        <MailInput value={mailValue} onChange={OnMailChange} />
        <InquireInput value={inquireValue} onChange={OnInquireChange} />
      </StyledInputArea>
      <div>
        <Button text="確認" onClick={onClick} />
      </div>
    </StyledForm>
  );
};

const StyledInputArea = styled.div`
  margin: 10px 0px 50px 0px;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
