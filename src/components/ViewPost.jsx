import React from 'react';

const ViewPost = ({ post }) => {
  return (
    <article>
      <div>
        <h2>{post.title}</h2>
        <p>{post.author}</p>
        <p>{post.createAt}</p>
      </div>
      <div>{post.body}</div>
    </article>
  );
};

export default ViewPost;
