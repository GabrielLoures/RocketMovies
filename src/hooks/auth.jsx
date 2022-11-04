import { api } from "../services/api";

import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {
      const res = await api.post("/sessions", { email, password })
      const { user, token } = res.data

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token })

    } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }

  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth() {

  const context = useContext(AuthContext)
  
  return context

}

export { AuthProvider, useAuth }

  