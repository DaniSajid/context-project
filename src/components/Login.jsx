import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [name , setName] = useState('')
    const [pass , setPass] = useState('')
   
    const {setUser} = useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({name,pass})
    }
  return (
    <>
        <h2>Login</h2>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' name='name'/>
        <input type="text" onChange={(e) => setPass(e.target.value)} placeholder='Password' name='pass' />
        <button onClick={handleSubmit}>
            Submit
        </button>
    </>
  )
}

export default Login