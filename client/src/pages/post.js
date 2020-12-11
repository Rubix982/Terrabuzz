import React from 'react';
import Container from '../components/FullViewContainer';
import MainContent from '../components/Post/MainContent';
import PostProvider from '../components/Post/PostContext';


import Navbar from '../components/Navbar';

const Post = () => (
  <Container
    style={{
      backgroundColor: '#18191a',
      display: 'grid',
      gridTemplateRows: '10% 90%',
    }}
  >
    <Navbar first_name="Tashik" title="Terrabuzz" />
    <PostProvider>
      <MainContent />    
    </PostProvider>
  </Container>
);

export default Post;
