import React from "react";
import { Link } from "react-router-dom";
// import Options from './Options'

// Assets
import BackArrow from "./../../assets/publish/back.svg";

// Styling
import PublishHeaderStyling from "../../style//Publish/PublishHeader.module.css";

const PublishHeader = ({ children, style }) => {
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
        <div className={PublishHeaderStyling.publishPage}>
          <p>Publish</p>
        </div>

        {/* <div>
                <Options />
            </div> */}
      </div>
    </div>
  );
};

export default PublishHeader;
