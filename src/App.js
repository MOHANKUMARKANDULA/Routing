import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store

import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your entire application with Provider */}
      <Router>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/post/:postId" element={<PostDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
