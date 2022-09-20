// import { useState } from "react";
import Button from "../components/Button/Button";

export default function Register() {
  // TODO: add an alert when registration successful
  // const [login, setLogin] = useState({
  //   email: "",
  //   password: "",
  //   firstname: "",
  //   lastname: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLogin({ ...login, [name]: value });
  // };

  // const handleRegister = () => {
  //   console.log("Handle Register");
  // };

  return (
    // TODO: Add front validation
    <div>
      <Button
        // handleClick={handleRegister}
        classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Register
      </Button>{" "}
    </div>
  );
}
