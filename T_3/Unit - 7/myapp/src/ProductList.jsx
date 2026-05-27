import ProductCard from './ProductCard'; 
import img1 from "./assets/download.png" 
import img2 from "./assets/download.png"
function ProductList() { 
const products = [ 
{ 
title: "F1 Farari", 
price: "સાડા ​​ત્રણ ખોખા", 
rating: 4.8, 
image: img1 
}, 
{ 
title: "F1 Farari (2025)", 
price: "દોઢ ખોખુ", 
rating: 4.5, 
image: img2 
} 
]; 
return ( 
<div> 
<h1>Our Products</h1> 
<ProductCard productList={products} /> 
</div> 
); 
} 
export default ProductList;