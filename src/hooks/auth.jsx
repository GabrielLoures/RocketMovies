import { api } from "../services/api";

import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {
      const res = await api.post("/sessions", { email, password })
      const { user, token } = res.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token })

    } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }

  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:token")
    localStorage.removeItem("@rocketmovies:user")

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const res = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = res.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({ user, token: data.token })

      alert("Perfil atualizado com sucesso!")

    } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ token, user: JSON.parse(user) })
    }

  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth() {

  const context = useContext(AuthContext)
  
  return context

}

export { AuthProvider, useAuth }

  