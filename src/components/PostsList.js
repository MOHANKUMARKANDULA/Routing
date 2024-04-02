import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setPosts } from '../redux/actions';

const PostsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch(setPosts(response.data));
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [dispatch]);

  const handleReadMore = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <span>{`Post ${index + 1}: `}</span>
            <h2>{post.title}</h2>
            <button onClick={() => handleReadMore(post.id)}>Read More</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
