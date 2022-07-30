import React from 'react';
import './index.css';
import state from "./components/Redux/state";
import {rerenderEntireTree} from "./render";
import reportWebVitals from "./reportWebVitals";


rerenderEntireTree(state);

reportWebVitals();