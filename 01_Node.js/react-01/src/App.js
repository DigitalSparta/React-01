import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as BR, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BR>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile state={props.state.profilePages}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPages}/>}/>
                        <Route path='/friends/*' element={<Dialogs state={props.state.dialogsPages}/>}/>
                    </Routes>
                </div>
            </div>
        </BR>
    );
}


export default App;
