import { BASE_URL } from "./api";

export async function getFavorite() {
    const response = await fetch(BASE_URL+"/favorites");

    if (!response.ok) {
        throw new Error ("Failed to get favorites");
    }

    return response.json();
}

export async function addFavorite(productId) {
    const response = await fetch(BASE_URL+"/favorites",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            product_id: productId,
        })
    });
    if (!response.ok) {
        throw new Error("Failed to add product to favorites");
        console.error("Failed to add product to favorites, status:", response.status);      
    }

    const data =response.json();
    return data;
}

export async function deleteFavorites(id) {
    const response = await fetch(BASE_URL+"/favorites/"+id,{
        method:"DELETE",
    });

    if (!response.ok) {
        throw new Error ("Failed to delete product from favorites")
    }
    return response.json();

}
