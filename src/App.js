import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";
import SignIn from "./components/SignIn.js"
import SignUp from "./components/SignUp.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
