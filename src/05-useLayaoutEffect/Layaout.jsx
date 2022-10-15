import React from "react";
import { useLayoutEffect, useState } from "react";

export const Layaout = () => {
  const [randomNumber, setRandomNumber] = useState(1);
  const [effectLogs, setEffectLogs] = useState([]);

  function resetear({ inicial = 0 }) {
    setRandomNumber(inicial);
  }

  useLayoutEffect(() => {
    setEffectLogs((preEvenEffect) => [...preEvenEffect, "efecto hecho"]);
  }, [randomNumber]);

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          setRandomNumber(Math.random());
        }}
      >
        Generate random number!
      </button>
      <button
        onClick={() => {
          setRandomNumber(resetear);
        }}
      >
        reset
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <h2 key={index}>{"🍔".repeat(index) + effect}</h2>
        ))}
      </div>
    </div>
  );
};
// basicamente useLayaoutEffect se usa para vitar que el usuario vea parpadeos de cambios, puede utilizar . La función pasada useLayaoutEffect a se ejecutará antes de que el navegador actualice la pantalla
