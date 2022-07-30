import React, {useRef} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPosts} from "../../Redux/state";
import PostsData from "./Post/PostsData/PostsData";

debugger;
const MyPosts = (props) => {
  debugger;

  let PostsElements = PostsData.map( p => <Post message={p.message} likes={p.likes}/>);

  let ref = useRef(props.state.PostsData);

  let addPost = () =>{
    let text = ref.current.value; debugger;
    alert (props.addPosts(text));
  }


  return <div className={c.postsBlock}>
    My posts
    <div>
      <textarea ref={ref}></textarea>
    </div>
    <div>
      <button onClick={addPost}>Add post</button>
      <button>Remove</button>
    </div>
    <div className={c.posts}>
      {PostsElements}
    </div>
  </div>
}
export default MyPosts;