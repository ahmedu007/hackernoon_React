import React, { Fragment } from "react";

const StoryBox = ({ title, url, descendants, score }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{url}</p>
      <p>Comments: {descendants}</p>
      <p>Score: {score}</p>
      {/* <p>{}</p> */}
    </Fragment>
  );
};

export default StoryBox;
