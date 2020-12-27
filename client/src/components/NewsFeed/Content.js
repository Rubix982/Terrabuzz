import React, { useState, useEffect } from 'react';
import ComponentStyling from '../../style/NewsFeed/Content.module.css';
import NewPost from './NewPost';
import FeedEntries from './FeedEntries';
import API from '../../API/API';

const Content = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const { data } = await API.getRequest(`${process.env.REACT_APP_API_URL}/feed`);
      setFeedData(data);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, [])

  if(loading) {
    return (
      <>
      </>
    );
  } else {
    return (
      <div className={ComponentStyling.content}>
        <NewPost />
        <FeedEntries feedData={feedData} />
      </div>
    );
  }
};

export default Content;
