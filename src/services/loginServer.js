import { BASE_URL } from "./api";


export async function loginUser(name,gmail) {
    const response = await fetch(BASE_URL+"/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: name,
            email: gmail
        })
    })
}


