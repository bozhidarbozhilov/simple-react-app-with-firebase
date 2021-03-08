import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './helpers/react-seen-it-firebase-sdk';
import './App.css';
import Header from "./components/common/Header";
import IndexPage from "./components/home/IndexPage";
import './styles/site.css';
import Logout from "./components/user/Logout";
import PostContainer from "./components/posts/PostContainer";
import CreatePost from "./components/posts/CreatePost";
import "./styles/post.css";
import "./styles/submit.css"
import Navigation from "./components/common/Navigation";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div id="container">
                    <Header/>
                    <div className="content">
                        <Navigation/>
                    </div>
                    <Switch>
                        <Route path="/logout">
                            <Logout/>
                        </Route>

                        <Route path="/posts">
                            <PostContainer/>
                        </Route>
                        <Route path="/create-post">
                            <CreatePost/>
                        </Route>
                        <Route exact path="/">
                            <IndexPage/>
                        </Route>
                    </Switch>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
