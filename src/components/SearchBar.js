import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../App';
import styled from 'styled-components';


export const SearchForm = styled.form`
  padding-top: -40%;
  padding-bottom: 50px;
  padding-left: 60%;
`;

export const SearchVid = styled.input`
  height: 30px;
  width: 200px;

`;

export const SearchBtn = styled.button`
  margin-left: 2px;
  width: 80px;
  margin-bottom: 61px;
  color: black;
  height: 30px;
  font-size: 15px;
`;


export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const { setSearchTerm } = useContext(AppContext);

  const onSubmit = (data) => {
    setSearchTerm(data.text);
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchVid type="text" {...register('text')} />
      <SearchBtn>Search</SearchBtn>
    </SearchForm>
  );
}
