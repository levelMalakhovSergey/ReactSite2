import React, { useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id:1,  title: "JavaScript", description: "Description" },
    { id:2,  title: "JavaScript", description: "Description" },
    {  id:3, title: "JavaScript", description: "Description" },
  ]);
  const createPost = (newPost) =>
  {
    setPosts([...posts,newPost])
  }
  const removePost = (post) =>
  {
    setPosts(posts.filter(p=>p.id!==post.id) )
  }
  
  return (
    <div className="App">
      <PostForm create = {createPost}/>
      {
            posts.length !==0
            ? <PostList remove = {removePost} posts={posts} title="Post List 1" />
            : <h1 style={{textAlign : "center"}}>Post List is empty </h1>
      }
      
    </div>
  );
}

export default App;
