import React from 'react'

// Styling
import PostsAndLinksStyling from '../../style/Profile/PostsAndLinks.module.css'

// React Components
import ExternalLinks from './ExternalLinks'
import PostGrid from './PostGrid'

const PostsAndLinks = ({ children, style }) => {
    return (
        <div className={PostsAndLinksStyling.layoutGridContent}>
            <ExternalLinks />
            <PostGrid />
        </div>
    )
}

export default PostsAndLinks;