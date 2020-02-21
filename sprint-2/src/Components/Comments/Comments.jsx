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
            <p className="comments__timestamp">{timestamp}</p>
          </div>
          <p className="comments__msg">{comment}</p>
        </div>
      </div>
    </article>
  );
};

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
