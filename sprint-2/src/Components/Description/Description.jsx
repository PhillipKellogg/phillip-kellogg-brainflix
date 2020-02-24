import React from "react";
// import axios from "axios";
import "./Description.scss";

const Description = props => {
  const {
    title,
    channel,
    timestamp,
    views,
    likes,
    description
  } = props.statistics;
  const currentTimeStamp = new Date().getTime();
  return (
    <article className="info bottom__desc">
      <article className="info__top">
        <h2 className="info__title">{title}</h2>
        <span className="info__user">
          <p className="info__channel">By {channel}</p>
          <p className="info__timestamp">{timeSince(timestamp)}</p>
        </span>
        <article className="info__stats">
          <div className="info__views">
            <div className="info__icon--views"></div>
            <p>{views}</p>
          </div>
          <div className="info__likes">
            <div className="info__icon--likes"></div>
            <p>{likes}</p>
          </div>
        </article>
      </article>
      <p className="info__description"> {description}</p>
    </article>
  );
};
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

export default function(props) {
  return (
    <div>
      {/* {console.log(props.statistics)} */}
      <Description statistics={props.statistics} />
    </div>
  );
}
