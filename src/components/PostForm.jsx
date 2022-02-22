import React from 'react';
import { useState } from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const PostForm = ({create}) => {
    const [post, setPost] = useState({title:"", description:""});


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost= {
        ...post,id: Date.now()
    }
    create(newPost)
    setPost({title:"", description:""})
  };
    return (
        
            <form>
        <MyInput
          value={post.title}
          type="text"
          placeholder="Title"
          onChange={(e) => setPost(  {...post,title:e.target.value})}
        ></MyInput>

        <MyInput
          value={post.description}
          type="text"
          placeholder="Description"
          onChange={(e) => setPost({...post, description:e.target.value})}>

          </MyInput>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
        
    );
};

export default PostForm;