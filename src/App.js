import React from 'react';
import './App.css';
import { Header } from './Components/Header/header';
import { Nav } from './Components/Nav/nav';
import { Post } from './Components/Post/post';
import { reduxFetchPosts, selectFilteredPosts, reduxFetchComments } from './features/reddit/redditSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const reddit = useSelector((state) => state.reddit)
  const { isLoading, error, searchTerm, chosenSubreddit } = reddit;
  const dispatch = useDispatch();
  const posts = useSelector(selectFilteredPosts);

  useEffect(() => {
    dispatch(reduxFetchPosts(chosenSubreddit));
    
    
  }, [chosenSubreddit])

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(reduxFetchComments(index, permalink));
    };
    return getComments;
  };
  

  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="container">
        {posts.map((post, index) => (
          <Post 
          key = {post.id}
          post={post}
          comments = {onToggleComments(index)}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
