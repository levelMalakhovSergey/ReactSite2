import React from 'react';
import { useState } from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const PostForm = ({create}) => {
    const [post, setPost] = useState({title:"", description:""});
 let isDisabled = {disabled:false};
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
              {
                post.title.length<10
                ?
                <MyInput
                value={post.title}
                type="text"
                placeholder="Title"
                onChange={(e) => setPost(  {...post,title:e.target.value})}
              ></MyInput>
                : 
                  <div>
                  <MyInput
                value={post.title}
                type="text"
                placeholder="Title"
                onChange={(e) => setPost(  {...post,title:e.target.value})}
              ></MyInput>
              <h4>Title cant't be longer then 10 chars</h4>
              {isDisabled.disabled=true}
              </div>
              
              }
        <MyInput
          value={post.description}
          type="text"
          placeholder="Description"
          onChange={(e) => setPost({...post, description:e.target.value})}>

          </MyInput>
        <MyButton {...isDisabled}  onClick={addNewPost}>Create post</MyButton>
      </form>
        
    );
};

export default PostForm;