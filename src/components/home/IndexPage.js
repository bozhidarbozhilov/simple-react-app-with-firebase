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
import PostComments from "../posts/PostComments";
import requester from "../../helpers/requester";
import firebaseAuth from "../../helpers/firebase-auth";


export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            allPosts:{}
        }
        this.getAllPosts = this.getAllPosts.bind(this);
    }

    loggedInUser = (username) => {
        this.setState({displayName: username});
    }


    getAllPosts() {
        const collection = 'posts';
        return requester.get(collection).then(res => res.json());
    }

    componentDidMount() {
        observer.subscribe(constants.EVENT_NAMES.loginUser, this.loggedInUser);

        this.getAllPosts().then(allPosts => {
            this.setState({allPosts: allPosts});
        })
            .catch(error => console.log(error));

    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header isLoggedUser={this.loggedInUser} displayName={this.state.displayName}/>
                    <div className="content">
                        {this.state.displayName
                            ? <Navigation/>
                            : null
                        }
                        <Switch>
                            <Route path="/logout" render={()=>(<Logout loggedInUser={this.loggedInUser}/>)}/>
                            <Route path="/posts" render={()=>(<PostContainer allPosts={this.state.allPosts}/>)}/>
                            <Route path="/create-post" component={CreatePost}/>
                            <Route path="/my-posts" render={()=>(<MyPosts allPosts={this.state.allPosts}/>)}/>
                            <Route path="/post-comments/:postId" render={(props)=>(<PostComments {...props} allPosts={this.state.allPosts}/>)}/>
                            <Route exact path="/" component={Welcome}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}