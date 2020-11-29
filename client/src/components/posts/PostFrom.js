import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostFrom = ({ addPost }) => {
  const [text, setText] = useState("");
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave A Comment</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
        className="form my-1"
      >
        <textarea
          onChange={(e) => setText(e.target.value)}
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment on this post"
          required
          value={text}
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostFrom.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostFrom);
