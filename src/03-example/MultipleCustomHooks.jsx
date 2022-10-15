import { useCounter, useFecth } from "../hooks"; //se aplico el concepto de exportaciones de barril
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(); //se uso este hooks antes creado para incrementar de forma dinamica el quote es decir el nombre de la ecena de la serie

  const { data, isLoading, hasError } = useFecth(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  //  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>BreakingBad</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote data={data} />}

      <button
        onClick={() => increment()} //onClick para incrementar
        className="btn btn-danger"
        disabled={isLoading} //propiedad para que cuando cargue nueva informacion se desabilite el boton
      >
        Next quote
      </button>
    </>
  );
};
