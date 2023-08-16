import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCategory, fetchCategories } from "../../api/CategoryAPI";
import { useLoading } from "../../context/loading";
import Button from "../components/Button/Button";
import CategoryListItem from "../components/CategoryListItem/CategoryListItem";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchCategories();
      setCategories(data);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, [setLoading]);

  async function handleDelete(e, id) {
    e.preventDefault();
    const handleDelete = window.confirm(
      "Are you sure to delete this category ?"
    );
    if (handleDelete) {
      setLoading(true);
      await deleteCategory(id);
      const products = await fetchCategories();
      setCategories(products);
      setLoading(false);
    }
  }

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <h1 className="text-xl">My categories</h1>
      <div>
        {categories.length > 0 &&
          categories?.map((category) => (
            <CategoryListItem
              name={category.name}
              key={category.id}
              handleDelete={handleDelete}
              id={category.id}
            />
          ))}
      </div>
      <Link to={`/categories/add`}>
        <Button classNameValue="mt-4 inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 hover:cursor-pointer">
          Add category
        </Button>
      </Link>
    </div>
  );
}
