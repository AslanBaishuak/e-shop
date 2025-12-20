import {BASE_URL} from "./api";

export async function getCart() {
    const response = await fetch(BASE_URL + "/cart");

    if (!response.ok) {
        throw new Error ("Failed to get cart");
    }

    return response.json();
}

export async function addToCart(productId, quantity = 1) {
    const response = await fetch(BASE_URL + "/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            product_id: productId,
            quantity
        })
    });

     if (!response.ok) {
        throw new Error ("Failed to add product to cart");
    }

    return response.json();
}

export async function updateToCart(productId, quantity) {
    const response = await fetch(BASE_URL + "/cart/" + productId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            quantity
        })
    });

     if (!response.ok) {
        throw new Error ("Failed to update quantity product cart");
    }

    return response.json();
}

export async function removeFromCart(productId) {
    const response = await fetch(BASE_URL + "/cart/" + productId, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error ("Failed to delete product cart");
    }

    return response.json();
}
