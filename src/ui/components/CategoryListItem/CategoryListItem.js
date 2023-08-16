import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function CategoryListItem({ name, handleDelete, id }) {
  return (
    <Link to={`/categories/edit/${name}`}>
      <div className="flex items-center font-semibold mt-2 text-lg">
        <p className="mr-4 underline">{name}</p>
        <Button
          handleClick={handleDelete}
          parameter={id}
          classNameValue="inline-flex items-center text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:cursor-pointer"
        >
          Delete
        </Button>
      </div>
    </Link>
  );
}
