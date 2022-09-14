import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleLogin = () => {
    console.log("Handle Login");
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
      <Button handleClick={handleLogin}>Login</Button>
    </div>
  );
}
