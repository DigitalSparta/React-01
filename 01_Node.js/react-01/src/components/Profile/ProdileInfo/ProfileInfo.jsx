import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2HOw9V4OYNT4OKir_E5DnfOy6E8QbeqgVQ&usqp=CAU'/>
            </div>
            <div className="description_block">
                ava + Description
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'/>
            </div>
        </div>
    );
}

export default ProfileInfo;