// import { ProductCard } from "../components/ProductCard";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export const ProductListing = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true); // For handling loading state
//     const [error, setError] = useState(null); // For handling errors
  
//     useEffect(() => {
//         const fetchProducts = async () => {
//           try {
//             const { data } = await axios.get('http://localhost:3000/api/products');
//             console.log('API response:', data); // Log the response data
    
//             // Check if the products key exists and is an array
//             if (data && Array.isArray(data.products)) {
//               setProducts(data.products);
//             } else {
//               setError('Unexpected response format');
//             }
//           } catch (error) {
//             setError('Error fetching products');
//             console.error('Error fetching products:', error);
//           } finally {
//             setLoading(false);
//           }
//         };
    
//         fetchProducts();
//       }, []);
  
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;
  
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Products</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products.map(product => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//     );
//   };
  
import { ProductCard } from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://baral-bakery-shop.onrender.com/api/products');
        console.log('API response:', data);

        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Fruits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
