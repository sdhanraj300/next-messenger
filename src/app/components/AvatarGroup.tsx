"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
interface AvatarGroupProps {
  users?: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users = [] }) => {
  const slicedUsers = users?.slice(0, 3);
  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };
  return (
    <div className="relative h-11 w-11">
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={`
        absolute
        h-[21px]
        w-[21px]
        rounded-full
        overflow-hidden
        inline-block
        ${positionMap[index as keyof typeof positionMap]}
        `}
        >
          <Image
            src={user?.image || "/images/placeholder.jpg"}
            alt="avatar"
            fill
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
