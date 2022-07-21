import React, {useRef} from 'react';
import c from './MyPosts.module.css';
import Posts from "./Post/PostsData/Posts";
import Post from "./Post/Post";



const MyPosts = (props) => {

  let PostsElements = Posts.map(p=><Post message={p.message} likes={p.likes}/>)
  let ref=useRef();

  let addPost = () =>{
    let text = ref.current.value;
    alert(text);
  }


  return <div className={c.postsBlock}>
    My posts
    <div>
      <textarea ref={ref}></textarea>
    </div>
    <div>
      <button onClick={ addPost }>Add post</button>
      <button>Remove</button>
    </div>
    <div className={c.posts}>
      {PostsElements}
    </div>
  </div>
}
export default MyPosts;