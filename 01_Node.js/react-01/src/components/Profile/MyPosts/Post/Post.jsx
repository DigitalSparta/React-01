import React from 'react';
import c from './Post.module.css';
const Post = (props) => {

  return (
    <div className={c.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFgM_e3vahIRUI2-Ry8mh5DgaUUhM8xltFg&usqp=CAU' />
      {props.message}
      <div>
        <span>like</span>
        <div className={c.likes}>
          {props.likes}
          <img src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1cZn4P-WN63wr3Qw83f0gXSihbeTaq05-w&usqp=CAU' />
        </div>
      </div>
    </div>
  )
}

export default Post;