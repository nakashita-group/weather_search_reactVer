import styled from "styled-components";
import { NameInput } from "../molecules/NameInput";
import { MailInput } from "../molecules/MailInput";
import { InquireInput } from "../molecules/InquireInput";
import { Title } from "../molecules/Title";
import { Button } from "../atoms/button/Button";

export const InputForm = (props) => {
  const { NameValue, OnNameChange, MailValue, OnMailChange,InquireValue,OnInquireChange } = props;
  const onClick = () => {
    if (!window.woff.getAccessToken()) {
    window.woff.login();
    return;
  }
  
    window.woff.sendMessage({
        content: `kintone問い合わせ\n名前：${NameValue}\nメールアドレス：${MailValue}\n問い合わせ内容${InquireValue}`
    })
        .then(() => {
            console.log("メッセージ送信完了");
        })
        .catch((err) => {
            console.log('error', err);
        });

  };
  return (
    <StyledForm>
        <Title/>
      <StyledInputArea>
        <NameInput value={NameValue} onChange={OnNameChange} />
        <MailInput value={MailValue} onChange={OnMailChange} />
        <InquireInput value={InquireValue} onChange={OnInquireChange}/>
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
