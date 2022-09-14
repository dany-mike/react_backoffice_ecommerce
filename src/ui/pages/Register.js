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
      <Button handleClick={handleRegister}>Register</Button>{" "}
    </div>
  );
}
