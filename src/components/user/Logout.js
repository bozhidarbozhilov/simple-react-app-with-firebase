import React from "react";
import { Redirect } from "react-router-dom";
import firebaseAuth from "../../helpers/firebase-auth";
import storage from "../../helpers/storage";

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        firebaseAuth
            .logoutUser()
            .then(res=> {
                console.log('user is signed out...')
                storage.deleteUser();
            })
            .catch(error=>console.log(error));
    }

    render() {
        return (
            <Redirect to="/"/>
        )
    }
}