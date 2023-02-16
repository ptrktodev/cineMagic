import React from "react";
import "./Input.css";

const Input = ({ type, label, value, onChange, onBlur, erro, ativo }) => {
  console.log(erro);
  return (
    <section className="section-input">
      <label className="label">{label}</label>
      <input
        className="input-form"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {ativo && erro && <p>{erro}</p>}
    </section>
  );
};

export default Input;
