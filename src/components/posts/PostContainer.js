import React from "react";
import requester from "../../helpers/requester";
import Post from "./Post";


export default class PostContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let allPostsSection = [];
        Object.entries(this.props.allPosts).forEach((post,index)=> {
            allPostsSection.push(<Post key={post[0]}
                                       index={index+1}
                                       details={post}/>)
        });

        return (
            <section id="viewCatalog">
                <div className="posts">
                    {allPostsSection}
                </div>
            </section>
        )
    }
}