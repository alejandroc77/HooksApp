import { useCounter, useFecth } from "../hooks"; //se aplico el concepto de exportaciones de barril

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(); //se uso este hooks antes creado para incrementar de forma dinamica el quote es decir el nombre de la ecena de la serie

  const { data, isLoading, hasError } = useFecth(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote, series } = !!data && data[0]; //En esta ocasion se aplica esta destructuracion porque mi data  es un arreglo en vez de un objeto

  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>BreakingBad</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{series}</p>

          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

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
