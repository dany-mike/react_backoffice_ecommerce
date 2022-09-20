import { login } from "../../api/AuthAPI";
import useAuth from "../../context/auth";
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import SubmitButton from "../components/SubmitButton/SubmitButton";

export default function Login() {
  const { dispatch } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await login(data.email, data.password);
    dispatch({ type: "LOGIN" });
    // TODO add redirection with login success alert
  };

  console.log(errors);

  return (
    // TODO: Add front validation
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
        <Input
          inputLabel="Password"
          type="password"
          name="password"
          required="Password is required"
          register={register}
        />
        <SubmitButton
          value="Login"
          classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
        >
          Login
        </SubmitButton>
      </form>
    </div>
  );
}
