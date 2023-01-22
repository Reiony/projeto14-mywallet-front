import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./globalStyles.js"

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter></BrowserRouter>
        </>
    );
}