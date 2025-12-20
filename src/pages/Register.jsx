import React, { useState } from "react";
import "./Login.css";
import { RegisterUser } from "../services/register";

const Register = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [passwordC,setPasswordC] = useState();

    async function addUser(name,gmail,password,passwordC) {
        if (password === passwordC) {
            const response = await RegisterUser(name,gmail,password);
            return response.data
        }else{
            alert("passwords are not same")
        }
    }
    return (
        <>
        <div className="container">
            <input type="text" placeholder="Name" className="input" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder="Confirm Password" className="input" onChange={(e) => setPasswordC(e.target.value)}/>
            <button className="button" onClick={() => addUser(name,email,password,passwordC)}>Register</button>
        </div>
        </>
    )
}

export default Register;