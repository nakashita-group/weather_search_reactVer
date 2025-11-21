import "./App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Title } from "./molecules/Title";
import { InputForm } from "./organisms/InputForm";
import { ConfirmForm } from "./organisms/ConfirmForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { WorkReport } from "./WorkReport";

function App() {
  const [UserName, setUserName] = useState("テストユーザー");

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

  return (
    <>
      <Title />
      <Outlet />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm/>} />
          <Route path="/confirm/:nameValue/:mailValue/:inquireValue" element={<ConfirmForm />} />
          <Route path="/workReport" element={<WorkReport/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
