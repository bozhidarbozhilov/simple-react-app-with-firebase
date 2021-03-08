import React from "react";
import requester from "../../helpers/requester";
import Post from "./Post";
import Navigation from "../common/Navigation";


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
        return requester.get(collection).then(res => res.json());
    }

    componentDidMount() {
        this.getAllPosts().then(allPosts => {
            this.setState({posts: allPosts})
        })
            .catch(error=>console.log(error));

    }

    render() {
        let allPostsSection = [];
        debugger;
        this.state
            .posts
            .forEach((post, index) => {
                allPostsSection.push(<Post key={index} index={index} details={post}/>)
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