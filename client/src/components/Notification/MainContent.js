import React, { useEffect, useState } from 'react';

// React componenets
import { ContentComment, ContentLike } from './Content';
import ContentHead from './ContentHead';
import { LeftAlign, RightAlign } from '../FlexAlignment';

// Service
import { getCommentList, getLikeList } from '../../services/getNotifs.js';

// Styling
import MainContentStyling from '../../style/Notification/MainContent.module.css';

const MainContent = () => {

  let [loading, setLoading] = useState(true);
  let [commentList, setCommentList] = useState({}), [likeList, setLikeList] = useState({});

  useEffect(async () => {
    try {
      let data = await getCommentList();
      setCommentList(JSON.stringify(data));
      data = await getLikeList();
      setLikeList(JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  })

  if (loading) {
    return (<> </>)
  } else {
    return (
      <div className={MainContentStyling.MainContentContainer}>
        <div className={MainContent.ColumnContentContainer}>
          <LeftAlign>
            <ContentHead content='Comments' />
          </LeftAlign>
          <LeftAlign>
            <ContentComment content={commentList} />
          </LeftAlign>
        </div>
        <div className={MainContent.ColumnContentContainer}>
          <RightAlign>
            <ContentHead content='Likes' />
          </RightAlign>
          <RightAlign>
            <ContentLike content={likeList} />
          </RightAlign>
        </div>
      </div>
    )
  }
};

export default MainContent;
