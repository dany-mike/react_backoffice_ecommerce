import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../../api/ProductsAPI";
import ErrorMessageRendered from "../ErrorMessageRendered/ErrorMessageRendered";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import TextArea from "../TextArea/TextArea";

export default function ProductForm({ productInfo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return productInfo;
    }, [productInfo]),
  });

  useEffect(() => {
    reset(productInfo);
  }, [productInfo, reset]);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    const user = await updateProduct(
      productInfo.id,
      data.name,
      data.price,
      data.quantity,
      data.description,
      ""
    );

    if (user?.data?.message) {
      setErrorMessage(user?.data?.message);
      return;
    }

    navigate("/products");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputLabel="Product name"
          type="text"
          name="name"
          required="Product is required"
          register={register}
        />
        <ErrorMessage
          errors={errors}
          name="product"
          render={() => (
            <ErrorMessageRendered>
              {errors?.product?.message}
            </ErrorMessageRendered>
          )}
        />
        <Input
          inputLabel="Product price"
          type="number"
          name="price"
          required="Price is required"
          register={register}
        />
        <ErrorMessage
          errors={errors}
          name="price"
          render={() => (
            <ErrorMessageRendered>
              {errors?.price?.message}
            </ErrorMessageRendered>
          )}
        />
        <TextArea
          label="Description"
          labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          textAreaClass="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="description"
          register={register}
        />
        <Input
          inputLabel="Product quantity"
          type="number"
          name="quantity"
          required="Quantity is required"
          register={register}
        />
        <ErrorMessage
          errors={errors}
          name="quantity"
          render={() => (
            <ErrorMessageRendered>
              {errors?.quantity?.message}
            </ErrorMessageRendered>
          )}
        />
        <Input
          inputLabel="Product image"
          type="text"
          name="image"
          register={register}
        />
        <ErrorMessage
          errors={errors}
          name="image"
          render={() => (
            <ErrorMessageRendered>
              {errors?.image?.message}
            </ErrorMessageRendered>
          )}
        />

        {errorMessage ? (
          <ErrorMessageRendered>{errorMessage}</ErrorMessageRendered>
        ) : (
          <></>
        )}
        <SubmitButton
          value="Update product"
          classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4"
        />
      </form>{" "}
    </div>
  );
}
