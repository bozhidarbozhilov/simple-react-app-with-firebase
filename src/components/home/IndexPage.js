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


export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            allPosts:{}
        }
        observer.subscribe(constants.EVENT_NAMES.loginUser, this.loggedInUser);
        this.getAllPosts = this.getAllPosts.bind(this);
    }

    loggedInUser = (res) => {
        this.setState({displayName: res.user.displayName})
    }

    getAllPosts() {
        const collection = 'posts';
        return requester.get(collection).then(res => res.json());
    }

    componentDidMount() {
        this.getAllPosts().then(allPosts => {
            console.log(allPosts);
            this.setState({allPosts: allPosts});
        })
            .catch(error => console.log(error));

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
                            <Route path="/logout" component={Logout}/>
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