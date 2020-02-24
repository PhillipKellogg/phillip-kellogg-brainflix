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
  return (
    <article className="info bottom__desc">
      <article className="info__top">
        <h2 className="info__title">{title}</h2>
        <span className="info__user">
          <p className="info__channel">By {channel}</p>
          <p className="info__timestamp">{timestamp}</p>
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

export default function(props) {
  return (
    <div>
      {/* {console.log(props.statistics)} */}
      <Description statistics={props.statistics} />
    </div>
  );
}
