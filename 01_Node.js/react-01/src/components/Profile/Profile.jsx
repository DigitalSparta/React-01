import React from 'react';
import Myposts from './MyPosts/MyPosts';
import c from './Profile.module.css';
const Profile = () => {
  return <div className={c.content} >
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2HOw9V4OYNT4OKir_E5DnfOy6E8QbeqgVQ&usqp=CAU' />
    </div>
    <div>
      ava + Description
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU' />
    </div>
    <Myposts message='Hello'/>
  </div>
}

export default Profile;