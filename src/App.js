// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPostTitles from './AllPostTitles';
import PostDetail from './PostDetail'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPostTitles />} />
        <Route path="/post/:postId" element={<PostDetail />} /> {/* Add route for post detail */}
      </Routes>
    </Router>
  );
}

export default App;
