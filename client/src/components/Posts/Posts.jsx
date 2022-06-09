import React from 'react'
import Post from './post/Post';
import useStyles from './styles';
const Posts = () => {
  const classess = useStyles();
  return (
    <div>
      <h1>Posts</h1>
      <Post />
    </div>
  )
}

export default Posts;
