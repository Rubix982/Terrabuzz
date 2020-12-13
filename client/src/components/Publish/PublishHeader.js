import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { publishContext } from './PublishContext'
import { publishPost } from '../../services/publish'
import Select from 'react-select';

// Assets
import BackArrow from '../../assets/publish/back.svg';

// Styling
import PublishHeaderStyling from '../../style/Publish/PublishHeader.module.css';

const PublishHeader = () => {
  const [[title], [content], [interest, setInterest]] = useContext(publishContext);
  const history = useHistory();

  return (
    <div className={PublishHeaderStyling.containerPublishHeader}>
      <div>
        <Link to="/feed">
          <div className={PublishHeaderStyling.goBackGridStyling}>
            <div className={PublishHeaderStyling.backArrow}>
              <img src={BackArrow} alt="back-arrow" />
            </div>
            <div className={PublishHeaderStyling.goBack}>
              <p>Go back</p>
            </div>
          </div>
        </Link>
      </div>

      <div></div>

      <div className={PublishHeaderStyling.rightSideGrid}>
        <div className={PublishHeaderStyling.interestContent}>
          <form className={PublishHeaderStyling.interestContent}>
            <label className={PublishHeaderStyling.staticName} htmlFor='interest'>
              <input onChange={(event) => {
                setInterest(event.target.value);
              }} suppressContentEditableWarning value={interest}
                type="text" name="title" className={PublishHeaderStyling.removeFocus}
                aria-placeholder="Interest goes here ..." contentEditable="true"
                placeholder="#Interest goes here ... " maxLength="40" />
            </label>
          </form>
        </div>
        <div className={PublishHeaderStyling.floatRight}>
          <div onClick={async () => {
            try {
              await publishPost(title, content, interest);
              setTimeout(() => {
                history.push('/feed');
              }, 3000);
            } catch (error) {
              alert(error.message);
            }
          }} className={`${PublishHeaderStyling.publishPage} ${PublishHeaderStyling.publishButton}`}>
            <p>Publish</p>
          </div>
        </div>
      </div>
    </div >
  )
};

export default PublishHeader;
