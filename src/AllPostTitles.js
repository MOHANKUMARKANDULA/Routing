import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AllPostTitles() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(t => {
        setPosts(t);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [{userId:100,id:250,title:"allow",body:"hello world"}]);

  const handleReadMore = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div>
      <center>
      <h1>All Post Titles</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <div>
              <span>{`POST - ${index + 1}`}</span><br/>
              <h2>{post.title}</h2>
              <button onClick={() => handleReadMore(post.id)}>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      </center>
    </div>
  );
}

export default AllPostTitles;
