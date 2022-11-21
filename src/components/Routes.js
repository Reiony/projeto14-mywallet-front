import {Routes, Route} from "react-router-dom" ;
import SignIn from "./Pages/SignIn.js"
import SignUp from "./Pages/SignUp.js"
import CashIn from "./Pages/CashIn.js"
import CashOut from "./Pages/CashOut.js"
import Home from "./Pages/Home.js"
export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn/> } />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/home' element={<Home/>} />
            {/* <Route path='/cash-in' element={<CashIn/>} />
            <Route path='/cash-out' element={<CashOut/>} /> */}
        </Routes>
    )
}
