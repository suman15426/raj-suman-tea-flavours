import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Our Blends</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="italic text-gray-600">{p.description}</p>
            <p className="mt-2 font-semibold">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}