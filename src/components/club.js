import React from "react";

const Club = ({ image, alttag, clubName, date }) => {
  return (
    <div className="flexboxes_content">
      <img src={`/${image}`} alt={alttag} className="p_icon" />
      <h2>{clubName}</h2>
      <p className="date">{date}</p>
    </div>
  );
};

export default Club;
