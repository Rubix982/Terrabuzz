import React from 'react';

// Styling
import PostGridStyling from '../../style/Profile/PostGrid.module.css';
import TashikProfilePicture from '../../assets/profile/Profile_Picture.jpg'

// React components
import Post from './Post'

const PostGrid = ({ children, style }) => {

    const ExamplePostContent = {
        ProfilePicture: TashikProfilePicture,
        NameTag: 'Tashik Moin Sheikh',
        UserHandle: '@mspCheetah',
        PostContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est ex, sagittis sed felis a, elementum auctor erat. Suspendisse potenti. Suspendisse ornare ex vitae euismod auctor. Integer pharetra felis at sapien tempor tincidunt. Nulla facilisi. Pellentesque elementum vel justo et tristique. Quisque rhoncus molestie nulla vel dictum. Aenean id accumsan justo, in condimentum arcu. ',
        Likes: '15',
        Comments: '13',
    }

    return (
        <div className={PostGridStyling.HidingOverflow}>
            <div className={PostGridStyling.PostGridLayout}>
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
                <Post prop={ExamplePostContent} />
            </div>
        </div>
    );
};

export default PostGrid;