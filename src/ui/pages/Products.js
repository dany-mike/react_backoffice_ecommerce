import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../api/ProductsAPI";
import { useLoading } from "../../context/loading";
import Button from "../components/Button/Button";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, [setLoading]);

  async function handleDelete(e, id) {
    setLoading(true);
    e.preventDefault();
    console.log(id);
    await deleteProduct(id);
    const products = await fetchProducts();
    setProducts(products);
    setLoading(false);
  }

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <h1 className="text-xl">My products</h1>
      <div className="flex flex-wrap">
        {products.length > 0 &&
          products?.map((product) => (
            <ProductCard
              description={product.description}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              id={product.id}
              key={product.id}
              image={product.image}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      <Link to={`/products/add`}>
        <Button classNameValue="mt-4 inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 hover:cursor-pointer">
          Add product
        </Button>
      </Link>
    </div>
  );
}
