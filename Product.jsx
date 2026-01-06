import ProductCard from "../components/ProductCard";

export default function Products() { 
    const dummyProducts = [
        { 
          id: 1, 
          name: "Rice Bag", 
          price: 1200 
        },
        { 
          id: 2, 
          name: "Product 2", 
          price: 200 
        },
        { 
          id: 3, 
          name: "Product 3", 
          price: 300 
        }
    ];
    
    return (
        <div>
            <h1 style={{ padding : 20 }}>Products</h1>
            <ProductCard product={dummyProducts[0]} />
            <ProductCard product={dummyProducts[1]} />
            <ProductCard product={dummyProducts[2]} />
        </div>
    );
}