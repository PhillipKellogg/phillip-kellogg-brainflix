import React from "react";
import "./Comments.scss";
import UserPic from "../../Assets/Images/Mohan-muruge.jpg";
const DisplayComment = props => {
  const { comment, name, timestamp } = props.commentData;
  return (
    <div>
      <h4 className="comments__name">{name}</h4>
      <p className="comments__timestamp">{timestamp}</p>
      <p className="comments__comment">{comment}</p>
    </div>
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
        <article className="form">
          <img src={UserPic} alt="" className="form__pic" />
          <form onSubmit={this.newComment}>
            <div className="form__text">
              <label htmlFor="comment">Join The Coversation</label>
              <textarea
                name="comment"
                className="form__comment"
                placeholder="Add a new comment"
                required
              ></textarea>
            </div>
            <input type="submit" value="COMMENT" className="form__button" />
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
