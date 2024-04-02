import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setPosts } from '../redux/actions';

const PostDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const post = posts.find(post => post.id === parseInt(postId));

  useEffect(() => {
    if (!posts.length) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          dispatch(setPosts(response.data));
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }
  }, [dispatch, posts.length]);

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <h2>{post.title}</h2>
      <p>User ID: {post.userId}</p>
      <p>Post ID: {post.id}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
