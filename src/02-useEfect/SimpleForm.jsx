import { useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "jordy",
    email: "jamazac@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //propiedades computadas de los objetos !revisar mas a fondo https://www.javascripttutorial.net/es6/javascript-computed-property/
    });
  };
  return (
    <>
      <h1>Simple Form</h1>
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
    </>
  );
};
