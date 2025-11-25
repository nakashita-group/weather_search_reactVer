import styled from "styled-components";
import { Confirm } from "../molecules/Confirm";
import { Button } from "../atoms/button/Button";
import { useParams } from "react-router-dom";

export const ConfirmForm = (props) => {
  const { nameValue, mailValue, inquireValue } = useParams();

  const onClick = () => {
    if (!window.woff.getAccessToken()) {
      window.woff.login();
      return;
    }

    try{
      window.woff
      .sendMessage({
        content: `kintone問い合わせ
        \n名前：${nameValue}
        \nメールアドレス：${mailValue}
        \n問い合わせ内容：${inquireValue}`,
      })
      .then(() => {
        console.log("メッセージ送信完了");
      })
      .catch((err) => {
        console.log("error", err);
      });

      alert("送信されました")
    }catch(e){
      alert("エラーが発生しました")
    }
  };
  return (
    <StyledComfirmWrapper>
      <Confirm value={nameValue} title="お名前" />
      <Confirm value={mailValue} title="メールアドレス" />
      <Confirm value={inquireValue} title="お問い合わせ内容" />
      <Button text="送信" onClick={onClick} />
    </StyledComfirmWrapper>
  );
};

const StyledComfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
