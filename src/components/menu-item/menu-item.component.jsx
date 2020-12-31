import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    className={`menu-item ${size}`}
  >
    <div
      className="background-image "
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

//Higher Order Component
export default withRouter(MenuItem);
