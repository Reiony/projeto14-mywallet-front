import { createContext, useState } from "react";
const AuthContext = createContext();
export default function AuthProvider({children}){
    const [Ath, setAth] = useState("");
    return (
        <AuthContext.Provider value = {{Ath,setAth}}>
            {children}
        </AuthContext.Provider>
    );
}