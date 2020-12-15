import React, { useContext } from 'react';

// Styling
import PostGridStyling from '../../style/Profile/PostGrid.module.css';

// React components
import Post from './Post';
import { profileContext } from './ProfileContext';
import { Link } from 'react-router-dom'


const PostGrid = () => {
  const { profile: { state: { userInformation: { Username, Handle, ProfilePicture }, posts } } } = useContext(profileContext);

  return (
    <div className={PostGridStyling.HidingOverflow}>
      <div className={PostGridStyling.PostGridLayout}>
        
        {posts.map((element) => {
          return (
          <Link key={element._id} to={`/post/${element._id}`}>
            <Post key={element._id} Username={Username} Handle={Handle} postInformation={element} ProfilePicture={ProfilePicture} />            
          </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PostGrid;
