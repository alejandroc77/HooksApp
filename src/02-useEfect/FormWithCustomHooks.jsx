import React from "react";
import { useForm } from "../hooks/useForm";
export const FormWithCustomHooks = () => {
  const { formState, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>Simple FormCustomHooks</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-3"
        placeholder="jordymaza@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-3"
        placeholder="Contraseñia"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </>
  );
};
