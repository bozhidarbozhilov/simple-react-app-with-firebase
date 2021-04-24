import React, {Component} from 'react';
import firebaseAuth from "../../helpers/firebase-auth";
import constants from "../../helpers/constants";
import storage from "../../helpers/storage";
import observer from "../../helpers/observer";

export default class RegisterForm extends Component {
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
        firebaseAuth.registerUser(this.state)
            .then(res=>{
                res.user.updateProfile({
                    displayName: this.state.displayName
                }).then(()=>{
                    storage.saveUser(res);
                    observer.trigger(constants.EVENT_NAMES.loginUser, res.user.displayName);
                    this.setState(constants.USER_DEFAULT_STATE);
                })
            })
            .catch(error=>console.log(error));
    }

    render() {
        return (
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                <label>Username:</label>
                <input name="displayName"
                       type="text"
                       value={this.state.displayName}
                       onChange={this.handleChange}/>
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
                <label>Repeat Password:</label>
                <input name="repeatPass"
                       type="password"
                       value={this.state.repeatPass}
                       onChange={this.handleChange}/>
                <input className="btn"
                       id="btnRegister"
                       value="Sign up"
                       type="submit"/>
            </form>
        )
    }

}