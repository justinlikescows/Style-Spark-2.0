import React from 'react';
import './ProfilePage.css'; // Import the CSS file for styling
import Header from './Header';
import Navbar from './Navbar';
const ProfilePage = () => {
  // Hardcoded data
  const profilePic = 'https://mascothalloffame.com/wp-content/uploads/bb-plugin/cache/peter-e1678817604295-circle.jpg'; // Replace with actual URL of the profile picture
  const numPosts = 3;
  const numFollowers = 1050;
  const numFollowing = 300;
  const styleScore = 1500;
  const userPosts = [
    'https://www.ocregister.com/wp-content/uploads/migration/nmg/nmgs2j-b88377276z.120150407182558000g3p91ami.10.jpg?w=620', // Replace with actual URLs of the user's posts
    'https://upload.wikimedia.org/wikipedia/commons/1/14/Peter_the_anteater.jpg',
    'https://ucisummersession.wordpress.com/wp-content/uploads/2014/05/peter2.jpg',

  ];

  return (
    <div>
      <Header />
      <br />
      <div className="profile-page">
      <div className="profile-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">{numPosts}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat">
            <span className="stat-number">{numFollowers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-number">{numFollowing}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat">
            <span className="stat-number">{styleScore}</span>
            <span className="stat-label">Style Score</span>
          </div>
        </div>
      </div>
      <div className="user-posts">
        {userPosts.map((post, index) => (
          <img key={index} src={post} alt={`Post ${index + 1}`} className="post-pic" />
        ))}
      </div>
    </div>
      <Navbar />
    </div>
    
  );
};

export default ProfilePage;
