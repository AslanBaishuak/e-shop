import { BASE_URL } from "./API";

export function getProducts() {
    return fetch(BASE_URL+"/products").then((res) => res.json())
}

export function createProduct(product) {
    return fetch(BASE_URL+"/products", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    }).then((res) => res.json());
}

export function getProduct(id) {
    return fetch(BASE_URL + "/products/"+id).then((res) => res.json());
}

export function editProduct(product,id) {
    return fetch(BASE_URL+"/products/"+id, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    }).then((res) => res.json());
}

export function deleteProduct(id) {
    return fetch(BASE_URL + "/products/"+id, {
        method: "DELETE"
    }).then((res) => res.json());
}