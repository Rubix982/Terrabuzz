import React, { useContext } from 'react';
import Container from '../components/FullViewContainer';
import MainContent from '../components/Post/MainContent';
import PostProvider from '../components/Post/PostContext';
import { loginUserContext } from '../components/LoginUserContext';


import Navbar from '../components/Navbar';
import NavBarLoggedOut from '../components/NavbarLoggedOut';

const Post = () => {
  const [ loggedIn ] = useContext(loginUserContext);
  return (
    <Container
      style={{
        backgroundColor: '#18191a',
        display: 'grid',
        gridTemplateRows: '10% 90%',
      }}
    >
      { loggedIn ? <Navbar /> : <NavBarLoggedOut/> }
      <PostProvider>
        <MainContent />    
      </PostProvider>
    </Container>
  );
};
export default Post;
