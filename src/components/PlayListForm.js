import React, { useState } from 'react';

import styled from 'styled-components';

export const ListForm = styled.form`
  align-items: center;
  margin-left: 500px;
  margin-top: -2px;
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
  margin-left: 2px;
  width: 80px;
  margin-bottom: 61px;
  height: 30px;
 
  font-size: 15px;
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
      <Label>Playlist Name:</Label>
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
