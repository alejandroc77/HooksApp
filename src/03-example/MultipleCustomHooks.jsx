import { useFecth } from "../hooks/useFecth";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFecth(
    "https://www.breakingbadapi.com/api/quotes/3"
  );

  const { author, quote, series } = !!data && data[0]; //En esta ocasion se aplica esta destructuracion porque me data un arreglo en vez de un objeto

  console.log({ data, isLoading, hasError });

  //   if (isLoading) {
  //     return <h1>Loading ...</h1>;
  //   }

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

      <button className="btn btn-danger">Next quote</button>
    </>
  );
};
