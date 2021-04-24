import React from "react";
import {Link} from "react-router-dom";
import "../../styles/header.css";
import constants from "../../helpers/constants";
import observer from "../../helpers/observer";

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                {this.props.displayName
                    ? <div id="profile">
                        <span>Hello, {this.props.displayName}</span>|
                        <Link to="/logout">logout</Link>
                        </div>
                    : null}
            </header>
        )
    }

}

export default Header;
