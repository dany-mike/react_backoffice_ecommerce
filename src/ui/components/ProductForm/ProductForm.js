import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useMemo, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createProduct, updateProduct } from "../../../api/ProductsAPI";
import { useLoading } from "../../../context/loading";
import Button from "../Button/Button";
import ErrorMessageRendered from "../ErrorMessageRendered/ErrorMessageRendered";
import FileUploadInput from "../FileUploadInput/FileUploadInput";
import InfoMessage from "../InfoMessage/InfoMessage";
import Input from "../Input/Input";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import SubmitButton from "../SubmitButton/SubmitButton";
import TextArea from "../TextArea/TextArea";

export default function ProductForm({ productInfo, isEdit }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return isEdit ? productInfo : null;
    }, [isEdit, productInfo]),
  });

  const { loading, setLoading } = useLoading();

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    reset(productInfo);
    const subscription = watch((value) => {
      setImageName(value.file[0]?.name);
    });
    return () => subscription.unsubscribe();
  }, [productInfo, reset, watch]);

  const onSubmit = async (data) => {
    setLoading(true);
    const user = isEdit
      ? await updateProduct(
          productInfo?.id,
          data?.name,
          Number(data?.price),
          Number(data?.quantity),
          data?.description,
          data?.file
        )
      : await createProduct(
          data.name,
          Number(data?.price),
          Number(data?.quantity),
          data?.description,
          data?.file
        );

    if (user?.data?.message) {
      setErrorMessage(user?.data?.message);
      return;
    }
    setLoading(false);
    navigate("/products");
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
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
        <FileUploadInput label="Upload product image" register={register} />
        {imageName ? (
          <InfoMessage>Added image: {imageName}</InfoMessage>
        ) : (
          <></>
        )}
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
          value={isEdit ? "Update product" : "Add product"}
          classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4"
        />
      </form>{" "}
      <Link to={"/products"}>
        <Button classNameValue="text-white flex justify-center hover:cursor-pointer bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700 w-full mt-4">
          Back
        </Button>
      </Link>
    </div>
  );
}
