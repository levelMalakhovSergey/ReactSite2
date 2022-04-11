import React from "react";
import MyButton from "./UI/button/MyButton";
import { Image } from 'antd';
import '../styles/App.css'
import {useHistory} from "react-router-dom";
const PostItem = (props) => {
  const router = useHistory()
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <Image width={50}
                 height={50}
                 src= {props.post.img}
                 preview={{
                   src: props.post.imgPrev
                 }}/>
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick = {() => router.push(`/posts/${props.post.id}`)}>Open</MyButton>
          <MyButton onClick = {() => props.remove(props.post)}>Delete post</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

