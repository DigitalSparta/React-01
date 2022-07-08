import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
const Myposts = (props) => {

  let Posts = [
    {id: 1, message:'Hi, how are you?', likes:'10'},
    {id: 2, message:'It`s my first post', likes:'1'}
  ]

  let PostsElements = Posts.map(p=><Post message={p.message} likes={p.likes}/>)
    return <div className={c.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={c.posts}>
        {PostsElements}
      </div>
    </div>
}

export default Myposts;