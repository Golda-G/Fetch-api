async function fetchProducts(){
    const response = await fetchProducts('https://fakestoreapi.com/products?_limit=5');
    const data = await response.json();
}