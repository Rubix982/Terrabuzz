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
          <form>
            <label htmlFor='interest'>
              
              {/* <select onChange={(event) => {
                setInterest(event.target.value);
              }} suppressContentEditableWarning value={interest} name='interest' >
                  <option value='0'>#philosophy</option>
                  <option value='1'>#food</option>
                  <option value='2'>#fast</option>
                  <option value='3'>#cloud</option>
                  <option value='4'>#humor</option>
                  <option value='5'>#football</option>
                  <option value='6'>#web</option>
                  <option value='7'>#karachi</option>
                </select> */}
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
    </div>
  )
};

export default PublishHeader;
