import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import Mypage from "./pages/Mypage";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Write from "./pages/Write";
import Read from "./pages/Read";
import Complete from "./pages/Complete";
import Start from "./pages/Start";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          {/* 시작페이지에서 시작 */}
          <Route path="/Main" element={<Main />} />{" "}
          <Route path="/Write" element={<Write />} />{" "}
          <Route path="/Complete" element={<Complete />} />{" "}
          <Route path="/Read" element={<Read />} />{" "}
          <Route path="/Mypage" element={<Mypage />} />{" "}
          {/* /Mypage 경로에 Mypage 컴포넌트를 매핑 */}
          <Route path="/Profile" element={<Profile />} />{" "}
          {/* /Profile 경로에 Profile 컴포넌트를 매핑 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
