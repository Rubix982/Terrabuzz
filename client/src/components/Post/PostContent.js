import React from 'react';
import ComponentStyling from '../../style/Post/PostContent.module.css';
import { CenterAlign } from '../FlexAlignment';

const PostContent = () => (
  <div className={ComponentStyling.main}>
    <div className={ComponentStyling.postBody}>
      <div className={ComponentStyling.postDescription}>
        <CenterAlign>
          <div className={ComponentStyling.profilePicture}>
            <img
              src="/assets/img/profile_pictures/boy.svg"
              alt="user profile"
            />
          </div>
        </CenterAlign>
        <div className={ComponentStyling.postTitle}>
          <h1>Richard Miles</h1>
          <h1>1st January, 2020</h1>
        </div>
      </div>
      <div className={ComponentStyling.postText}>
        <div>
          <h1>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci
            {' '}
          </h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            porttitor turpis vitae risus lobortis, id blandit velit tristique.
            Cras feugiat aliquam elit, sed scelerisque nulla efficitur vel.
            Nulla gravida maximus dui, sed consectetur metus porta a. Sed
            finibus ante ut lorem mattis, et congue augue iaculis. In at quam
            sit amet erat tincidunt semper in sed purus. Praesent ipsum urna,
            scelerisque nec consequat placerat, luctus id felis. Mauris nec
            fringilla turpis. Etiam a dignissim dia mauris. n at quam sit amet
            erat tincidunt semper in sed purus. Praesent ipsum urna,
            scelerisque nec consequat placerat, luctus id felis. Mauris nec
            fringilla turpis. Etiam a dignissim dia mauris. n at quam sit amet
            erat tincidunt semper in sed purus. Praesent ipsum urna,
            scelerisque nec consequat placerat, luctus id felis. Mauris nec
            fringilla turpis. Etiam a dignissim dia mauriss opo.
          </p>
        </div>
      </div>
    </div>
    <div className={ComponentStyling.stats}>
      <CenterAlign>
        <h1> 15 Likes</h1>
      </CenterAlign>
      <CenterAlign>
        <h1>7 Comments</h1>
      </CenterAlign>
    </div>
  </div>
);

export default PostContent;
