import { useState } from "react"

async function ReqLogin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let res = await axios.post("/login", {email: email, senha: password})
    setPassword = res.data.token;
}

export default ReqLogin()