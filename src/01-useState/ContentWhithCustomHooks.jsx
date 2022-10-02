import { useCounter } from "../hooks/useCounter";

export const ContentWhithCustomHooks = () => {
  const { counter, increment, reset, decrement } = useCounter();
  return (
    <>
      <h1>Counte Whith Hooks: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => reset()}>
        {" "}
        Reset
      </button>
      <button className="btn btn-success" onClick={() => decrement(3)}>
        {" "}
        -1
      </button>
    </>
  );
};
