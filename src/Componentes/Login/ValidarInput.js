import React from "react";

const ValidarInput = () => {
  const [value, setValue] = React.useState("");
  const [erro, setErro] = React.useState(false);
  const [ativo, setAtivo] = React.useState(false);

  function onChange({ target }) {
    setValue(target.value);
  }

  function validateValue(value) {
    if (value.length === 0) {
      setAtivo(true);
      setErro("Preencha o campo acima");
      setTimeout(() => {
        setAtivo(false);
      }, 3000);
      return false;
    } else if (value.length < 3) {
      setAtivo(true);
      setErro("Campo insuficiente");
      setTimeout(() => {
        setAtivo(false);
      }, 3000);
      return false;
    } else {
      setAtivo(false);
      setErro(false);
      return true;
    }
  }

  return { onChange, value, erro, ativo, onBlur: () => validateValue(value) };
};

export default ValidarInput;
