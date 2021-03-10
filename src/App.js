import React from 'react';

import './helpers/react-seen-it-firebase-sdk';
import IndexPage from "./components/home/IndexPage";
import Logout from "./components/user/Logout";
import PostContainer from "./components/posts/PostContainer";
import CreatePost from "./components/posts/CreatePost";
import './App.css';
import './styles/site.css';
import "./styles/post.css";
import "./styles/submit.css";

function App() {
    return (

        <div className="App">
            <div id="container">
                <IndexPage/>
            </div>
        </div>

    );
}

export default App;
