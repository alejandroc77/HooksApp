//import { useEffect } from "react";
import { useRef } from "react";

export const FocusScreen = () => {
  const focusInputRef = useRef(true);
  //   useEffect(() => {
  //     focusInputRef.current.focus();
  //   }, [focusInputRef]); -> para que cuando cargue por primera vez la pagina se focalize directamene en el input

  function onFocus() {
    focusInputRef.current.focus();
  }
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        type="text"
        placeholder="ingrese su nombre"
        className="form-control"
        ref={focusInputRef}
      />

      <button onClick={onFocus} className="btn btn-success mt-2">
        Set focus
      </button>
    </>
  );
};
