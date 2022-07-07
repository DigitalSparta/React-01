import React from 'react';
import Myposts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from "./ProdileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Myposts/>
        </div>

    );
}
export default Profile;