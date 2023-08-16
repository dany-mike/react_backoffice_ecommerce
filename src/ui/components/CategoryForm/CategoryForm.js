import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createCategory, updateCategory } from "../../../api/CategoryAPI";
import { useLoading } from "../../../context/loading";
import Button from "../Button/Button";
import ErrorMessageRendered from "../ErrorMessageRendered/ErrorMessageRendered";
import Input from "../Input/Input";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MultiSelectComponent from "../MultiSelectComponent/MultiSelectComponent";
import SubmitButton from "../SubmitButton/SubmitButton";

export default function CategoryForm({
  categoryInfo,
  isEdit,
  categoryProducts,
  products,
}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return isEdit ? categoryInfo : null;
    }, [isEdit, categoryInfo]),
  });

  const { loading, setLoading } = useLoading();
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (categoryProducts) {
      setSelected(categoryProducts);
    }
    reset(categoryInfo);
  }, [categoryInfo, categoryProducts, reset, watch]);

  const onSubmit = async (data) => {
    setLoading(true);
    const productIds = selected.map((c) => c.value);
    const user = isEdit
      ? await updateCategory(categoryInfo?.id, data?.name, productIds)
      : await createCategory(data.name, productIds);

    if (user?.data?.message) {
      setErrorMessage(user?.data?.message);
      return;
    }
    setLoading(false);
    navigate("/categories");
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputLabel="Category name"
          type="text"
          name="name"
          required="Category is required"
          register={register}
        />
        <ErrorMessage
          errors={errors}
          name="category"
          render={() => (
            <ErrorMessageRendered>
              {errors?.category?.message}
            </ErrorMessageRendered>
          )}
        />
        <MultiSelectComponent
          options={products}
          label={"Products"}
          selected={selected}
          setSelected={setSelected}
        />
        {errorMessage ? (
          <ErrorMessageRendered>{errorMessage}</ErrorMessageRendered>
        ) : (
          <></>
        )}
        <SubmitButton
          value={isEdit ? "Update category" : "Add category"}
          classNameValue="py-2 text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4"
        />
      </form>{" "}
      <Link to={"/categories"}>
        <Button classNameValue="text-white flex justify-center hover:cursor-pointer bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700 w-full mt-4">
          Back
        </Button>
      </Link>
    </div>
  );
}
