import React from "react";

const Social = ({ href, Icon }) => {
  return (
    <a
      href={href}
      className="text-neutral transition-color hover:text-neutral/50 h-full w-full duration-300 size-5"
      target="_blank"
    >
      <Icon className="text-2xl" />
    </a>
  );
};

export default Social;
