import React from "react";
import "./Comments.scss";
import UserPic from "../../Assets/Images/Mohan-muruge.jpg";
const DisplayComment = props => {
  const { comment, name, timestamp } = props.commentData;
  return (
    <article className="comments">
      <div className="comments__block">
        <div className="comments__pic"></div>
        <div className="comments__text">
          <div className="comments__top">
            <h4 className="comments__name">{name}</h4>
            <p className="comments__timestamp">
              {timeSince(new Date(Date.now() - timestamp))}
            </p>
          </div>
          <p className="comments__msg">{comment}</p>
        </div>
      </div>
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

export default class Comments extends React.Component {
  newComment = e => {
    e.preventDefault();
    //Do Nothing for now
  };

  render() {
    return (
      <section>
        <h2 className="title">3 Comments</h2>
        <article className="form">
          <img src={UserPic} alt="" className="form__pic" />
          <form onSubmit={this.newComment}>
            <div className="form__tablet">
              <div className="form__text">
                <label htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea
                  name="comment"
                  className="form__comment"
                  placeholder="Write comment here"
                  required
                ></textarea>
              </div>
              <input type="submit" value="COMMENT" className="form__button" />
            </div>
          </form>
        </article>
        {this.props.comments.map(commentObj => {
          return (
            <div key={commentObj.id} className="comment__wrapper">
              <DisplayComment commentData={commentObj} />
            </div>
          );
        })}
      </section>
    );
  }
}
