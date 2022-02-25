import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  // const SortedPosts = getSortedPosts();
  const SortedPosts = useMemo(() => {
    console.log("function worked");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);
  const sortedAndSearchedPosts = useMemo(() => {
    return SortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, SortedPosts]);


  async function fetchPosts() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  useEffect( () => {
      fetchPosts()
  }, [])




  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      {/* <MyButton onClick={fetchPosts}> GET POSTS</MyButton> */}
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        {" "}
        Add Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        {" "}
        <PostForm create={createPost} />{" "}
      </MyModal>

      <hr style={{ margin: "15px" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      
        {sortedAndSearchedPosts.length !== 0 ? (
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title="Post List 1"
            />
          ) : (
            <h1 style={{ textAlign: "center" }}>Post List is empty </h1>
          )}
      
    </div>
  );
}

export default App;
