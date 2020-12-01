import React from 'react';

const Posts = ({ user_number: { userName, avatarUrl, url } }) => (
  <div className="container card text-center">
    <img className="round-img" src={avatarUrl} alt="" style={{ width: '60px' }} />

    <h3>
      {' '}
      {userName}
      {' '}
    </h3>

    <div>
      <p>
        {' '}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </p>
    </div>

    <div>
      <a className="btn btn-dark btn-sm my-1" href={url}>
        View Complete Post
      </a>
    </div>
  </div>
);
export default Posts;
