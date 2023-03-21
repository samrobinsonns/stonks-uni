import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    function login(email, password) {
        // implement login logic using axios or any other method you prefer
    }

    function logout() {
        // implement logout logic
    }

    useEffect(() => {
        // check if user is already logged in and set the current user state accordingly
    }, []);

    const value = {
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { useAuth, AuthProvider };
