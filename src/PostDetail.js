// PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PostID from './PostID'; // Import the PostID component

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPost(data);
      })
      .catch(error => {
        console.error('Error fetching post detail:', error);
      });
  }, [postId]);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <button onClick={handleGoBack}>Back</button>
      </div>
      <div> 
        {post ? (
          <div>
            <h2>Title:{post.title}</h2>
            
            <PostID id={post.id} userId={post.userId} />
            <p>{post.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
