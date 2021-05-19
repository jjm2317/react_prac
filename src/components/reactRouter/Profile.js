import React from 'react';

const profileData = {
  jiman: {
    name: '지만',
    description: 'developer'
  },
  jiman2: {
    name: 'aa',
    description: 'blabla'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) return <div>존재하지 않는 사용자 입니다.</div>;
  return (
    <div>
      <h2>
        {username} {profile.name}
      </h2>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
