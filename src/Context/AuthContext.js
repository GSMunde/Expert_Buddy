import { createContext, useContext, useState } from "react"
import { mockUsers } from "./mockUsers";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });


    const login = (email, password) => {
        const matchedUser = mockUsers.find((u) => u.email === email && u.password === password);

        if(matchedUser) {
            setUser(matchedUser);
            localStorage.setItem('user', JSON.stringify(matchedUser));
            return { success : true}
        };

        return { success : false, message : "Invalid credentials"};
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user')
    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);