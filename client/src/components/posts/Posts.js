import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";

import { connect } from "react-redux";
import { getPosts } from "../../actions/post";

const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      {/* Post form */}
      <div className="posts">
        {posts.map((item) => {
          return <PostItem key={item._id} post={item} />;
        })}
      </div>
    </>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
