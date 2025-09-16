const products = [

  { id: 101, name: "Laptop", price: 50000, category: "Electronics" },

  { id: 102, name: "Phone", price: 30000, category: "Electronics" },

  { id: 103, name: "Shirt", price: 2000, category: "Clothing" },

  { id: 104, name: "Shoes", price: 4000, category: "Clothing" },

  { id: 105, name: "Watch", price: 8000, category: "Accessories" }

];

// Group products by category

const grouped = products.reduce((acc,product)=>{
    if(!acc[product.category]){
        acc[product.category]=[];
    }
    acc[product.category].push(product);
    return acc;
},{});
console.log(grouped);