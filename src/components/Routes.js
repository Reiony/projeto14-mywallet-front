import {Routes, Route} from "react-router-dom" ;
import SignIn from "./Pages/SignIn.js"
import SignUp from "./Pages/SignUp.js"
import NewEntry from "./Pages/NewEntry.js"
import Home from "./Pages/Home.js"
export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn/> } />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/new-entry' element={<NewEntry/>} />
        </Routes>
    )
}
