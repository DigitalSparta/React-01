import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Navbar/Friend/friends";
import {Route, Routes} from "react-router-dom";
import LS from "./components/Dialogs/ls/ls";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>

            <Navbar state={props.state.sidebarPages}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/*' element={<Profile
                        state={props.state.profilePages}
                        addPosts={props.addPosts}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPages}/>}/>
                    <Route path='/friends/*' element={<Friends state={props.state.sidebarPages}/>}/>
                    <Route path='/LS/*' element={<LS state={props.state.dialogsPages}/>}/>

                </Routes>
            </div>
        </div>

    );
}


export default App;
