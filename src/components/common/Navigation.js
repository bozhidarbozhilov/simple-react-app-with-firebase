import React from "react";
import { Link } from "react-router-dom"

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <Link className="nav" to="/posts">Catalog</Link>
                <Link className="nav" to="/create-post">Submit Link</Link>
                <Link className="nav" to="/my-posts">My Posts</Link>
            </div>
        )
    }
}