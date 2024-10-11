// eslint-disable-next-line no-unused-vars
import React from "react";
import CardAuditor from "./CardAuditor";
import profiles from "../Customers/profile";
function AllAuditors() {
  const visibleProfiles = profiles.slice(0, 8);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProfiles.map((profile, index) => (
          <CardAuditor
            key={index}
            name={profile.name}
            avatar={profile.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default AllAuditors;
