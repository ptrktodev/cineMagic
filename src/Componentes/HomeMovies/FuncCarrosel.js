import React from "react";

const FuncCarrosel = () => {
  const refCarrosel = React.useRef(0);
  function next() {
    refCarrosel.current.scrollLeft =
      refCarrosel.current.scrollLeft + refCarrosel.current.offsetWidth;
  }

  function prev() {
    refCarrosel.current.scrollLeft =
      refCarrosel.current.scrollLeft - refCarrosel.current.offsetWidth;
  }

  return { next, prev, refCarrosel };
};

export default FuncCarrosel;
