import { api } from "../services/api";

import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext({});

function AuthProvider({children}) {

  const [data, setData] = useState({});

  async function SignIn({ email, password }) {

    const res = await api.post("/sessions", { email, password })

  }

}