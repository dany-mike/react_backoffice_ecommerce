import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
// import { login } from "../../api/AuthAPI";

export default function Login() {
  const [loginField, setLoginField] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginField({ ...loginField, [name]: value });
  };

  const handleLogin = async () => {
    console.log("Handle Login");
    // await login();
  };

  return (
    <div className="login">
      <Input
        handleChange={handleChange}
        inputLabel="Email"
        type="text"
        name="email"
      />
      <Input
        handleChange={handleChange}
        inputLabel="Password"
        type="password"
        name="password"
      />
      <Button
        handleClick={handleLogin}
        classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Login
      </Button>
    </div>
  );
}
