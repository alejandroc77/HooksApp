import React from "react";

export const Small = React.memo(({ valor }) => {
  console.log(`Me volvi a dibujar`);
  return (
    <div>
      <small>{valor}</small>
    </div>
  );
});
