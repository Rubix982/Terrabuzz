import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import { countAndFormatTotalLikes, formatTotalComments , reducePostContent } from '../../services/post';

const FeedEntries = ({ feedData }) => {
  return (
    feedData.map((element) => {
      return (
        <Link key={element.id} to={`/post/${element.id}`}>
          <Post  handle={element.Handle} profilePicture={element.ProfilePicture} username={element.Username} date={element.postDetails.datePublished} content={reducePostContent(element.postDetails.content, 200)} likeCount={countAndFormatTotalLikes(element.postDetails.likes)} commentCount={formatTotalComments(element.postDetails.comments)} interest={element.postDetails.interest} />
        </Link>
      )
    })
  );
};

export default FeedEntries;
