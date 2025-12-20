import { BASE_URL } from "./api";

export async function RegisterUser(name,email,password) {
    const response = await fetch(BASE_URL+"/register", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password:password,
        })
    })

    if (!response.ok) {
        throw new Error ("cannot register a user")
    }
}