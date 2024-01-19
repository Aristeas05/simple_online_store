import axios from "axios";

//GET
export const getProducts = (callback) => {
    axios.get(`https://65a99ab3219bfa371869861c.mockapi.io/api/ygoproducts/products`)
    .then((response) => {
        callback(response.data);
    });
}

//GET BY ID
export const getProductById = (id,callback) => {
    axios.get(`https://65a99ab3219bfa371869861c.mockapi.io/api/ygoproducts/products/`+id)
    .then((response) => {
        callback(response.data);
    });
}