// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProfileCard from './ProfileCards'
import profiles from './profile'; 
function Profiles() {
  const visibleProfiles = profiles.slice(0, 8);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {visibleProfiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            address={profile.address}
            avatar={profile.avatar}
            company={profile.company}
          />
        ))}
      </div>
    </div>
  )
}

export default Profiles