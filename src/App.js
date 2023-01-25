import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";
import SignIn from "./components/SignIn.js"
import SignUp from "./components/SignUp.js";
import NewEntry from "./components/NewEntry.js";
import Home from "./components/Home.js"
import NewExit from "./components/NewExit.js";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="new-entry" element={<NewEntry/>}/>
          <Route path="/new-exit" element={<NewExit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
