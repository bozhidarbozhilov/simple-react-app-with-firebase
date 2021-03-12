import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Welcome from "./Welcome";
import Header from "../common/Header";
import Navigation from "../common/Navigation";
import Logout from "../user/Logout";
import PostContainer from "../posts/PostContainer";
import CreatePost from "../posts/CreatePost";
import observer from "../../helpers/observer";
import constants from "../../helpers/constants";
import MyPosts from "../posts/MyPosts";


export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
        }
        observer.subscribe(constants.EVENT_NAMES.loginUser, this.loggedInUser);
    }

    loggedInUser = (res) => {
        this.setState({displayName: res.user.displayName})
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header displayName={this.state.displayName}/>
                    <div className="content">
                        {this.state.displayName
                            ? <Navigation/>
                            : null
                        }
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
                            <Route path="/my-posts">
                                <MyPosts/>
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