import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  //     username: "",
  //     email: "",
  //     password: "",

  const onResetForm = () => {
    //Funcion para resetear el formulario
    setFormState(initialForm);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //propiedades computadas de los objetos !revisar mas a fondo https://www.javascripttutorial.net/es6/javascript-computed-property/
    });
  };
  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
