import React from 'react';
import { Link } from 'react-router-dom';
import Post from "./Post";

export default class PostComments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {postId} = this.props.match.params;
        const post = Object.entries(this.props.allPosts).filter(post=>post[0]===postId);
        console.log(post);
        const postSection = <Post key={post[0][0]}
                                  details={post[0]}/>;

        return(
            <section id="viewComments">
                {postSection}
                <div className="post post-content">
                    <form id="commentForm">
                        <label>Comment</label>
                        <textarea name="content"/>
                        <input type="submit" value="Add Comment" id="btnPostComment"/>
                    </form>
                </div>
                <article className="post post-content">
                    <p>Thanks, just what I needed.</p>
                    <div className="info">
                        submitted 5 days ago by Gosho | <Link to="#" className="deleteLink">delete</Link>
                    </div>
                </article>
            </section>
            )
    }
}