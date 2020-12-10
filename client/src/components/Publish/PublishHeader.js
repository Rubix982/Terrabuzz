import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { publishContext } from './PublishContext'
import { publishPost } from '../../services/publish'
// import Options from './Options'

// Assets
import BackArrow from '../../assets/publish/back.svg';

// Styling
import PublishHeaderStyling from '../../style/Publish/PublishHeader.module.css';

const PublishHeader = () => {
  const [[title], [content]] = useContext(publishContext);
  const history = useHistory();

  return (
    <div className={PublishHeaderStyling.containerPublishHeader}>
      <div>
        <div className={PublishHeaderStyling.backArrow}>
          <img src={BackArrow} alt="back-arrow" />
        </div>
        <div className={PublishHeaderStyling.goBack}>
          <Link to="/feed">
            <p>Go back</p>
          </Link>
        </div>
      </div>

      <div className={PublishHeaderStyling.floatRight}>
        <div onClick={ async () => {
          try {
            await publishPost(title, content);
            setTimeout(() => {
              history.push('/feed');
            }, 3000);         
          } catch (error) {
            alert(error.message);
          }
        }} className={`${PublishHeaderStyling.publishPage} ${PublishHeaderStyling.publishButton}`}>
          <p>Publish</p>
        </div>

        {/* <div>
                  <Options />
              </div> */}
      </div>
    </div>
)};

export default PublishHeader;
