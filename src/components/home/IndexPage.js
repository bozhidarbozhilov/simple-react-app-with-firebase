import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Welcome from "./Welcome";
import About from "./About";
import Header from "../common/Header";
import Navigation from "../common/Navigation";
import Logout from "../user/Logout";
import PostContainer from "../posts/PostContainer";
import CreatePost from "../posts/CreatePost";


export default class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="content">
                        <Navigation/>
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
                                <Welcome/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>


        )
    }
}