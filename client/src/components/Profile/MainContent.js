import React from "react";

// React components
import ProfileSection from "./ProfileSection";
import PostsAndLinks from "./PostsAndLinks";

import MainContentStyling from "../../style/Profile/MainContent.module.css";

const MainContent = ({ children, style }) => {
  const ProfileSectionInformation = {
    UserName: "Tashik Moin Sheikh",
    UserHandle: "@mspCheetah",
    Location: "Silicon Valley, San Francisco",
    Connections: 308,
    Posts: 35,
    Biography:
      "A Computer Scientist, have skills in Linux, Docker, React, Git, OpenMP, GitHub, C, C++, C#, JavaScript, Python, HTML, CSS, Databases, .NET Framework, .NET Core, Blazor, Azure, AWS",
    Activities:
      "Coding, gaming, computer scientist, MCT, MCP, MLSA, MSP, MOS, Microsoft",
    Interest: "#football, #microsoft, #webdev, #cloud, #libra #fast #beef",
  };

  return (
    <div className={MainContentStyling.detailsAndPostsLinks}>
      <ProfileSection children={ProfileSectionInformation} />
      <PostsAndLinks />
    </div>
  );
};

export default MainContent;
