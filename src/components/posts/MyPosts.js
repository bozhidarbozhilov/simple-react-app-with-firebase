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
            this.setState({posts: allPosts});
        })
            .catch(error => console.log(error));

    }

    render() {
        let myPostsSection = [];
        Object.entries(this.state.posts)
            .filter(post=>post[1].authorId===JSON.parse(storage.getData('userInfo')).uid)
            .forEach((post,index)=> {
            myPostsSection.push(<Post key={post[0]}
                                       index={index}
                                       details={post[1]}/>)
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