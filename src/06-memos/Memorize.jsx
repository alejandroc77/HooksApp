import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(); //estoy utilizando este hooks ya antes creado para utilizarlo solo debo importarlo

  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter :<Small valor={counter} />
      </h1>
      <button className="btn btn-danger" onClick={() => increment()}>
        Counter +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-secondary"
      >
        Show/hide{JSON.stringify(show.toString())}
      </button>
    </>
  );
};

//Memorizar estos componentes solo es recomendable cuando los componentes son muy grandes y solo lo queremos hacer cuando las properties cambian
