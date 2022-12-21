import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createAdmin } from "../../api/AuthAPI";
import { useLoading } from "../../context/loading";
import ErrorMessageRendered from "../components/ErrorMessageRendered/ErrorMessageRendered";
import Input from "../components/Input/Input";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Select from "../components/Select/Select";
import SubmitButton from "../components/SubmitButton/SubmitButton";

export default function Register({ user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { loading, setLoading } = useLoading();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    const user = await createAdmin(
      data.email,
      data.password,
      data.firstname,
      data.lastname,
      data.role
    );

    if (user?.data?.message) {
      setErrorMessage(user?.data?.message);
      return;
    }
    setLoading(false);
    navigate("/users");
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="register">
      {user?.roles.includes("superAdmin") ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputLabel="Email"
            type="text"
            name="email"
            required="Email is required"
            patternValue={/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
            patternMessage="Email must be valid"
            register={register}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={() => (
              <ErrorMessageRendered>
                {errors?.email?.message}
              </ErrorMessageRendered>
            )}
          />
          <Input
            inputLabel="Password"
            type="password"
            name="password"
            required="Password is required"
            register={register}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={() => (
              <ErrorMessageRendered>
                {errors?.password?.message}
              </ErrorMessageRendered>
            )}
          />
          <Input
            inputLabel="Firstname"
            type="text"
            name="firstname"
            required="Firstname is required"
            register={register}
          />
          <ErrorMessage
            errors={errors}
            name="firstname"
            render={() => (
              <ErrorMessageRendered>
                {errors?.firstname?.message}
              </ErrorMessageRendered>
            )}
          />
          <Input
            inputLabel="Lastname"
            type="text"
            name="lastname"
            required="Lastname is required"
            register={register}
          />
          <ErrorMessage
            errors={errors}
            name="lastname"
            render={() => (
              <ErrorMessageRendered>
                {errors?.lastname?.message}
              </ErrorMessageRendered>
            )}
          />
          <Select
            register={register}
            name="role"
            options={["admin", "superAdmin"]}
            selectLabel="Role"
          />
          <ErrorMessage
            errors={errors}
            name="role"
            render={() => (
              <ErrorMessageRendered>
                {errors?.role?.message}
              </ErrorMessageRendered>
            )}
          />
          {errorMessage ? (
            <ErrorMessageRendered>{errorMessage}</ErrorMessageRendered>
          ) : (
            <></>
          )}
          <SubmitButton
            value="Register"
            classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4"
          />
        </form>
      ) : (
        <>
          <ErrorMessageRendered>
            <span className="font-bold text-xl">
              Role: {user?.roles.at(-1)}
            </span>
          </ErrorMessageRendered>
          <ErrorMessageRendered>
            <span className="font-bold text-xl">
              You don't have permissions to create an admin user
            </span>
          </ErrorMessageRendered>
        </>
      )}
    </div>
  );
}
