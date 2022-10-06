import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove); //efectos secundarios para que me elimine las coordenadas cuando el usuario no existe
    };
  }, []);

  return (
    <>
      <h3>Usuario exist</h3>
    </>
  );
};

// JSON.stringify()!  me sirve para graficar en la web objetos, porque los objetos en si no se pueden graficar en la pantalla , para ello se debe utilizar el JSON.stringify()
