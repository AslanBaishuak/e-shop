import React, { useEffect, useState } from "react";
import "./Login.css";
import {  loginUser } from "../services/loginServer";

const Login =() => {
    const [gmail,setGmail] = useState();
    const [name,setName] = useState();

    async function addUser(name,gmail) {
        const response = await loginUser(name,gmail);

        return response.data;
    }
    return (
        <>
        <div className="container">
            <input type="text" placeholder="Gmail" className="input" onChange={(e) => setGmail(e.target.value)}/>
            <input type="text" placeholder="Password" className="input" onChange={(e) => setName(e.target.value)}/>
            <button className="button" onClick={() => addUser(name,gmail)}>Login</button>
        </div>

        </>
    )
}

export default Login;