import React from "react";

const Avatar = props => (
  <div className="avatar" style={{backgroundImage: `url(${props.src})`}} />
);

export default Avatar;
