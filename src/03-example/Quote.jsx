export const Quote = ({ data }) => {
  const { author, quote, series } = !!data && data[0]; //En esta ocasion se aplica esta destructuracion porque mi data  es un arreglo en vez de un objeto
  return (
    <div>
      <blockquote className="blockquote text-end">
        <p className="mb-3">{series}</p>

        <p className="mb-2">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
    </div>
  );
};
