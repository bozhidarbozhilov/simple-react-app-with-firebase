import React from "react";
import {Redirect, Route} from "react-router-dom";
import firebaseAuth from "../../helpers/firebase-auth";
import storage from "../../helpers/storage";
import IndexPage from "../home/IndexPage";
import observer from "../../helpers/observer";

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        firebaseAuth
            .logoutUser()
            .then(()=> {
                storage.deleteUser();
                this.props.loggedInUser('');
            })
            .catch(error=>console.log(error));
    }

    render() {
        this.logout();
        return (
            <Redirect to="/"/>
        )
    }
}