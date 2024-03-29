import {rerenderEntireTree} from "../../render";

let state = {
    profilePages: {
        PostsData: [
            {id: 1, message: 'Hi, how are you?', likes: '10'},
            {id: 2, message: 'It`s my first post', likes: '1'}
        ]
    },

    dialogsPages: {

        DialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Vicktor'},
            {id: 5, name: 'Venegred'},
            {id: 6, name: 'Dimych'}
        ],
        MessagesData: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Hello'},
        ]
    },

    sidebarPages: {
        DialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Vicktor'},
            {id: 5, name: 'Venegred'},
            {id: 6, name: 'Dimych'}
        ]
    }
}




export let addPosts = (postMessage) =>{
    let newPost={
        id:5,
        message: postMessage,
        likes: '0'
    };
    state.profilePages.PostsData.push(newPost);
    rerenderEntireTree(state);
};
debugger;

export default state;
