import React from "react";

const TitleHead = (props) => {
  React.useEffect(() => {
    document.title = `  CineMagic | ${props.title}`;
  }, [props]);

  return <div></div>;
};

export default TitleHead;
