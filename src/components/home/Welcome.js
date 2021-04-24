import React, {Component} from 'react';

import LoginForm from "../user/LoginForm";
import RegisterForm from "../user/RegisterForm";

import About from "./About";

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="viewWelcome">
                <div className="welcome">
                    <div className="signup">
                        <LoginForm/>
                        <RegisterForm/>
                    </div>
                    <About/>
                </div>
            </section>

        );
    }
}


