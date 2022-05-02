import React, { useState } from 'react';

import styled from 'styled-components';

export const ListForm = styled.form`
  margin-left: 50px;
  margin-top: -2px;
  left: -40%;
  height: 120px
`;

export const Label = styled.label`
  
  font-size: 15px;
  padding: 2px;
`;

export const PlaylistName = styled.input`
  width: 200px;
  height: 20px;
 
`;

export const Createlistbtn = styled.button`
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

const Form = ({ ThisonSubmit }) => {
  const [text, setText] = useState('');
  return (
    <ListForm
      onSubmit={(e) => {
        e.preventDefault();
        ThisonSubmit(text);
      }}
    >
      <h3 data-testid="heading">Playlist Name:</h3>
      <PlaylistName
        value={text}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
        }}
      />
      <Createlistbtn type="submit">Create</Createlistbtn>
    </ListForm>
  );
};
export default Form;
