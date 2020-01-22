import React from 'react';
import deleteNoteMutation from './mutations/deleteNote';

const MainPage = ({ data }) => {
  return (
    <button onClick={() => deleteNoteMutation('5e27e3da6c96b9e9219533d8')}>
      test
    </button>
  );
};

export default MainPage;
