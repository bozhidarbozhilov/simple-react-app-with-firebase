import React from 'react';
import {Link} from 'react-router-dom';
import Post from "./Post";
import requester from "../../helpers/requester";

export default class PostComments extends React.Component {
    constructor(props) {
        super(props);
        const {postId} = this.props.match.params;
        const post = Object.entries(this.props.allPosts).filter(post => post[0] === postId);
        this.state = {
            post: post[0],
            content: '',
            comments: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAllComments = this.getAllComments.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const targetName = target.name;
        const targetValue = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [targetName]: targetValue,
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const payload = {};
        payload.content = this.state.content;
        payload.postId = this.state.post[0];

        const collection = 'comments';

        requester.create(collection, payload).then(res=>console.log(res));
    }

    getAllComments() {
        const collection = 'comments';
        requester.get(collection).then(res=> {
            console.log(res);
            this.setState({comments: res});
        });
    }

    componentDidMount() {
        this.getAllComments()
    }

    render() {
        console.log(this.state.post);
        const postSection = <Post key={this.state.post[0]}
                                  details={this.state.post}/>;

        return (
            <section id="viewComments">
                {postSection}
                <div className="post post-content">
                    <form id="commentForm" onSubmit={this.handleSubmit}>
                        <label>Comment</label>
                        <textarea name="content"
                                  onChange={this.handleChange}/>
                        <input type="submit"
                               value="Add Comment"
                               id="btnPostComment"
                               />
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