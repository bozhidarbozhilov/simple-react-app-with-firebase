import React from "react";
import { Link } from "react-router-dom";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
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
        return (
            <article className="post">
                <div className="col rank">
                    <span>{this.props.index + 1}</span>
                </div>
                <div className="col thumbnail">
                    <Link to={this.props.details.url}>
                        <img
                            src={this.props.details.imageUrl}/>
                    </Link>
                </div>
                <div className="post-content">
                    <div className="title">
                        <Link to={this.props.details.url}>
                            {this.props.details.title}
                        </Link>
                    </div>
                    <div className="details">
                        <div className="info">
                            submitted {this.calcTime(this.props.details._kmd.ect)} ago by {this.props.details.author}
                        </div>
                        <div className="controls">
                            <ul>
                                <li className="action"><Link className="commentsLink" to="#">comments</Link></li>
                                <li className="action"><Link className="editLink" to="#">edit</Link></li>
                                <li className="action"><Link className="deleteLink" to="#">delete</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </article>
        );
    }
}