import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";
import styled from "styled-components";

export default function SearchBar() {
  const FORM = styled.form`
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 40%;
  `;

  const INPUT = styled.input`
    height: 40px;
    width: 200px;
  `;

  const BUTTON = styled.button`
    height: 43px;
    width: 100px;
    margin-left: 10px;
    background: red;
    font-size: 15px;
  `;
  const { register, handleSubmit } = useForm();
  const { setSearchTerm } = useContext(AppContext);

  const onSubmit = (data) => {
    setSearchTerm(data.text);
  };

  return (
    <FORM onSubmit={handleSubmit(onSubmit)}>
      <INPUT type="text" {...register("text")} />
      <BUTTON>Search</BUTTON>
    </FORM>
  );
}
