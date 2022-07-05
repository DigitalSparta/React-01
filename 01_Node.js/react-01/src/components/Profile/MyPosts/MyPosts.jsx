import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
const Myposts = (props) => {
  debugger;
    return <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={c.posts}>
      <Post message='Hi, how are you?' likes=' 10'/>
      <Post message='It`s my first post' likes=' 1'/>
      <Post />
      <Post />
      <Post />
      <Post />
      </div>
    </div>
}

export default Myposts;