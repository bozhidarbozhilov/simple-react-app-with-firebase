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
            email: '',
        }
    }

    componentDidMount() {
        observer.subscribe(constants.EVENT_NAMES.loginUser, this.loggedInUser);
    }

    loggedInUser = (res) => {
        this.setState({email: res.user.email})
    }

    render() {
        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                {this.state.email
                    ? <div id="profile">
                        <span>{this.state.email}</span>|
                        <Link to="/logout">logout</Link>
                        </div>
                    : null}
            </header>
        )
    }

}

export default Header;
