import "./App.css";
import { InputForm } from "./organisms/InputForm";
import { useEffect, useState } from "react";

function App() {
  const [nameText, setNameText] = useState("");
  const [mailText, setMailText] = useState("");
  const [inquireText, setInquireText] = useState("");
  const [UserName, setUserName] = useState("");

  useEffect(()=>{
    if (!window.woff) return;

    window.woff
  .init({
    //EndPointURLに初めてリダイレクトされるタイミングで実行
    woffId: "aVitSpcsneyMoOxvh0_Lug"
  })
  .then(() => {
    console.log("初期化完了！！");

    //ログイン情報がない場合ログイン画面表示
    if (!window.woff.getAccessToken()) {
      console.log("トークンなし → 認可フロー開始");
      window.woff.login();
      return;
    }

    console.log(window.woff.getAccessToken());

    //プロフィール情報取得
    window.woff.getProfile()
      .then((profile) => {
        console.log("プロフィール情報:", profile);
        setUserName(profile.displayName);
      })

  })
  .catch((err) => {
    // 初期化処理中にエラーが発生した場合
    console.log("エラー発生！！");
    console.log(err.code, err.message);
  });
  },[]);

  const OnNameChange = (e) => {
    setNameText(e.target.value);
  };
  const OnMailChange = (e) => {
    setMailText(e.target.value);
  };
  const OnInquireChange = (e) => {
    setInquireText(e.target.value);
  };
  return (
    <>
      <InputForm
        NameValue={nameText}
        OnNameChange={OnNameChange}
        MailValue={mailText}
        OnMailChange={OnMailChange}
        InquireValue={inquireText}
        OnInquireChange={OnInquireChange}
      />
    </>
  );
}

export default App;
