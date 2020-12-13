import React, { useState, useEffect } from 'react';
import API from '../../API/API';
import { countTotalLikes } from '../../services/post';
import { Link } from 'react-router-dom';
import ComponentStyling from '../../style/Home/Content.module.css';
import Post from './Post';
require('dotenv').config();

const Content = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect( async ()=> {
    try {
      const data = await API.getRequest(`${process.env.REACT_APP_API_URL}/`);
      setPostData(data);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  if (loading) {
    return (
      <>
      </>
    );
  } else {
    return (
      <div className={ComponentStyling.content}>
        {postData.map((element) => {
          return (
            <Link key={element._id} to={'/post/' + element._id}>
            <Post key={element._id} handle={element.handle} date={element.datePublished} content={element.content.substr(0,200)} likeCount={countTotalLikes(element.likes)} commentCount={element.comments.length} />
            </Link>
           );
        })}
      </div>
    );
  }
};

export default Content;
