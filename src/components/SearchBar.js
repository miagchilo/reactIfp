import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../App';
import styled from 'styled-components';


export const SeForm = styled.form`
text-align: right;
position: absolute;
width: 100%;
top: 5px;
left: 10%;
-webkit-transform: translateX(-50%);
-moz-transform: translateX(-50%);
-o-transform: translateX(-50%);
transform: translateX(-50%);
`;

export const SearchVid = styled.input`
  height: 25px;
  width: 200px;
`;

export const SearchBtn = styled.button`
color:#fff;
text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);
background-color: #fa5253;
text-transform: uppercase;
letter-spacing: 3px;
padding: 4px 9px;
margin: 5px;
font-size: 11px;
font-weight: 700;
border-radius: 20px;
border: 2px solid #bf4142;
`;


export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const { setSearchTerm } = useContext(AppContext);

  const onSubmit = (data) => {
    setSearchTerm(data.text);
  };

  return (
    <SeForm  onSubmit={handleSubmit(onSubmit)}>
      <SearchVid type="text" {...register('text')} />
      <SearchBtn>Search</SearchBtn>
    </SeForm>
  );
}
