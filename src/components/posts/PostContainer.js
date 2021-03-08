import React from "react";
import requester from "../../helpers/requester";
import Post from "./Post";


export default class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

        this.getAllPosts = this.getAllPosts.bind(this);
    }

    getAllPosts() {
        const collection = 'posts';
        return requester.get(collection).then(res => res.json().then(data=>data));
    }

    componentDidMount() {
        this.getAllPosts().then(allPosts => {
            this.setState({posts: allPosts})
        });

    }

    render() {
        let allPostsSection = [];
        this.state
            .posts
            .map((post, index) => {
                allPostsSection.push(<Post index={index} details={post}/>)
            })
        return (
            <section id="viewCatalog">
                <div className="posts">
                    {allPostsSection}
                </div>
            </section>
        )
    }
}