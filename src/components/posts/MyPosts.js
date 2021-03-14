import React from "react";
import requester from "../../helpers/requester";
import Post from "./Post";
import storage from "../../helpers/storage";


export default class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {}
        }

    }

    render() {
        let myPostsSection = [];
        Object.entries(this.props.allPosts)
            .filter(post=>post[1].authorId===JSON.parse(storage.getData('userInfo')).uid)
            .forEach((post,index)=> {
            myPostsSection.push(<Post key={post[0]}
                                       index={index+1}
                                       details={post}/>)
        });

        return (
            <section id="viewCatalog">
                <div className="posts">
                    {myPostsSection}
                </div>
            </section>
        )
    }
}