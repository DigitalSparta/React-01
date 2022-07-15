import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProdileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts Posts={props.state.Posts}/>
        </div>

    );
}
export default Profile;