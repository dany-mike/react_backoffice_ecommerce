import { getCurrentUser, login } from "../../api/AuthAPI";
import useAuth from "../../context/auth";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input from "../components/Input/Input";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import ErrorMessageRendered from "../components/ErrorMessageRendered/ErrorMessageRendered";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageValue } from "../../utils";

export default function Login() {
  const { dispatch } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await login(data.email, data.password);
    if (response?.statusCode === 200) {
      const payload = await getCurrentUser(getLocalStorageValue("user")?.id);
      const { token, ...user } = payload.data;
      dispatch({ type: "LOAD_USER", user });
      dispatch({ type: "LOGIN" });
      navigate("/");
    } else {
      setErrorMessage(response?.data?.message);
      return;
    }
  };

  return (
    <div className="login">
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
            <ErrorMessageRendered>{errors.email?.message}</ErrorMessageRendered>
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
              {errors.password?.message}
            </ErrorMessageRendered>
          )}
        />
        {errorMessage ? (
          <ErrorMessageRendered>{errorMessage}</ErrorMessageRendered>
        ) : (
          <></>
        )}
        <SubmitButton
          value="Login"
          classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4"
        />
      </form>
    </div>
  );
}
