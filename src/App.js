import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "absolyte", description: "vodka" },
    { id: 2, title: "sadasd", description: "asdasd" },
    { id: 3, title: "kepka", description: "krasnaya" },
  ]);
  const [filter,setFilter] = useState({sort:'', query:''})


  // const SortedPosts = getSortedPosts();
      const SortedPosts = useMemo(() => {
        console.log("dunction worked")
        if(filter.sort)
        {
         return  [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }else{
          return posts;
        }
      }, [filter.sort,posts]);
      const sortedAndSearchedPosts = useMemo(() => {
        return SortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
      }, [filter.query,SortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {sortedAndSearchedPosts .length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post List 1" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post List is empty </h1>
      )}
    </div>
  );
}

export default App;
