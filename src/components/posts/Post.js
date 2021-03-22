import React from "react";
import { Link } from "react-router-dom";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    calcTime(dateIsoFormat) {
        let diff = new Date() - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    render() {
        const id = this.props.details[0];
        const post = this.props.details[1];
        debugger;
        return (
            <article className="post">
                {this.props.index
                    ?
                    <div className="col rank">
                        <span>{this.props.index}</span>
                    </div>
                    : null
                }

                <div className="col thumbnail">
                    <Link to={this.props.details[1].url}>
                        <img
                            src={post.imageUrl}
                        alt="site logo"/>
                    </Link>
                </div>
                <div className="post-content">
                    <div className="title">
                        <Link to={post.url}>
                            {post.title}
                        </Link>
                    </div>
                    <div className="details">
                        <div className="info">
                            submitted {this.calcTime(post.created)} ago by {post.author}
                        </div>
                        <div className="controls">
                            <ul>
                                { this.props.index
                                    ?
                                    <li className="action"><Link className="commentsLink" to={`/post-comments/${id}`}>comments</Link></li>
                                    :
                                    null
                                }
                                <li className="action"><Link className="editLink" to="#">edit</Link></li>
                                <li className="action"><Link className="deleteLink" to="/my-posts">delete</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </article>
        );
    }
}