import React from 'react'

// Styling
import FeedStyling from '../../style/Home/Feed.module.css'

// React components
import Content from './Content'

const Feed = ({ children, style }) => {
    return (
        <main className={`${FeedStyling.HomepageLayout}`}>
            <Content />
            <div></div>
        </main>
    )
};

export default Feed;