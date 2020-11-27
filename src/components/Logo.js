import React from 'react';
const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src={require("../images/logo.svg")}
      {...props}
    />
  );
};

export default Logo;
