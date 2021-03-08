import React, {Component} from 'react';
import Welcome from "./Welcome";
import About from "./About";


export default class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="viewWelcome">
                <Welcome/>
            </section>
        )
    }
}