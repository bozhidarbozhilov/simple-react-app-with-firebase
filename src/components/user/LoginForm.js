import React, {Component} from 'react';
import constants from "../../helpers/constants";
import firebaseAuth from "../../helpers/firebase-auth";
import storage from "../../helpers/storage";
import observer from "../../helpers/observer";
import refreshAuthToken from "../../helpers/refreshAuthToken";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = constants.USER_DEFAULT_STATE;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const targetName = target.name;
        const targetValue = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [targetName]: targetValue
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        firebaseAuth.loginUser(this.state)
            .then(res => {
                console.log(res);
                storage.saveUser(res);
                observer.trigger(constants.EVENT_NAMES.loginUser, res);
                this.setState(constants.USER_DEFAULT_STATE);
                // refreshAuthToken()
                //     .then(token => res.user.updateProfile({idToken: token})
                //         .then(response => {
                //             storage.saveUser(response);
                //         }));
            })
            .catch(error => console.log('error',error));
    }

    render() {
        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Email:</label>
                <input name="email"
                       type="text"
                       value={this.state.email}
                       onChange={this.handleChange}/>
                <label>Password:</label>
                <input name="password"
                       type="password"
                       value={this.state.password}
                       onChange={this.handleChange}/>
                <input className="btn"
                       id="btnLogin"
                       value="Sign In"
                       type="submit"/>
            </form>
        )
    }

}