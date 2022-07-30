import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProdileInfo/ProfileInfo";


const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.profilePages} addPosts={props.addPosts}/>
        </div>

    );
}
export default Profile;