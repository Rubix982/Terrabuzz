import React from 'react';

import PostStyling from '../../style/Profile/Post.module.css'

const Post = ({ children, style, prop }) => {
    return (
        <div className={PostStyling.PostLayout}>
            <div className={PostStyling.PostTop}>
                <div className={PostStyling.ImageStyling}>
                    <img className={PostStyling.ProfilePicture} src={prop.ProfilePicture} alt="" />
                </div>
                <div className={PostStyling.WordHeader}>
                    <p className={PostStyling.NameTag}>{prop.NameTag}</p>
                    <p className={PostStyling.UserHandle}>{prop.UserHandle}</p>
                </div>
            </div>
            <div className={PostStyling.PostContent}>
                <p>{prop.PostContent}</p>
            </div>
            {/* <div className={PostStyling.BottomPart}>
                <div className={PostStyling.LikeButton}>
                    {prop.Likes} Likes
                </div>
                <div className={PostStyling.CommentButton}> 
                    {prop.Comments} Comments
                </div>
            </div> */}
        </div>
    )
};

export default Post;