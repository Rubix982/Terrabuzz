import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../API/API';
import MainContent from '../components/NewPassword/MainContent';

const NewPassword = () => {

  const { hashed } = useParams();

  useEffect(async () => {
    try {
      const { status } = await API.getRequest(`${process.env.REACT_APP_API_URL}/newPassword/${hashed}`);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <MainContent />
  );
};

export default NewPassword;
