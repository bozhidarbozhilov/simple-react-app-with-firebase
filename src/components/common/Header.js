import React from "react";
import {Link} from "react-router-dom";
import "../../styles/header.css";
import firebaseAuth from "../../helpers/firebase-auth";
import observer from "../../helpers/observer";
import constants from "../../helpers/constants";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
        }
    }

    componentDidMount() {
        observer.subscribe(constants.EVENT_NAMES.loginUser, this.loggedInUser);
    }

    loggedInUser = (res) => {
        this.setState({displayName: res.user.displayName})
    }

    render() {
        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                {this.state.displayName
                    ? <div id="profile">
                        <span>{this.state.displayName}</span>|
                        <Link to="/logout">logout</Link>
                        </div>
                    : null}
            </header>
        )
    }

}

export default Header;
