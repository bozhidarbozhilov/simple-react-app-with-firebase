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

        this.getAllPosts = this.getAllPosts.bind(this);
    }

    getAllPosts() {
        const collection = 'posts';
        return requester.get(collection).then(res => res.json());
    }

    componentDidMount() {
        this.getAllPosts().then(allPosts => {
            console.log(allPosts);
            debugger;
            //TODO fix filter
            const myPosts=allPosts.filter(post=>post.authorId===JSON.parse(storage.getData('userInfo')).uid)
            this.setState({posts: myPosts});
        })
            .catch(error => console.log(error));

    }

    render() {
        let allPostsSection = [];
        Object.entries(this.state.posts).forEach((post,index)=> {
            allPostsSection.push(<Post key={post[0]}
                                       index={index}
                                       details={post[1]}/>)
        });

        return (
            <section id="viewCatalog">
                <div className="posts">
                    <h1>All posts</h1>
                    {allPostsSection}
                </div>
            </section>
        )
    }
}