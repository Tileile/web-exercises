import AuthContext  from "./AuthContext";
import { useState } from "react";
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({ username });
    }

    const logout = () => {
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
