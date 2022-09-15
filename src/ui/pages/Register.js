import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

export default function Register() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleRegister = () => {
    console.log("Handle Register");
  };

  return (
    <div>
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
      <Input
        handleChange={handleChange}
        inputLabel="Lastname"
        type="text"
        name="lastname"
      />
      <Input
        handleChange={handleChange}
        inputLabel="Firstname"
        type="text"
        name="firstname"
      />
      <Button
        handleClick={handleRegister}
        classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Register
      </Button>{" "}
    </div>
  );
}
