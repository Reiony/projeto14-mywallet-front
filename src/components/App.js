import { createContext, useState } from "react";
import AppRoutes from "./Routes.js"
import GlobalStyle from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

export const UserContext = createContext({});
export default function App() {
    const [token, setToken] = useState(null);
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token, setToken }}>
                <GlobalStyle />
                <AppRoutes />
            </UserContext.Provider>
        </BrowserRouter>
    )
}