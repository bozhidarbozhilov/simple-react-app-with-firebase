import React from "react";
import requester from "../../helpers/requester";

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            title: '',
            imageUrl: '',
            description: '',
            _kmd:{
                etc:''
            }
        }
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
        const collection = 'posts';
        requester
            .create(collection, this.state)
            .then(res => console.log(res))
            .catch(error=>console.log(error));
    }


    render() {
        return (
            <section id="viewEdit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="editPostForm" className="submitForm">
                        <label>Link URL:</label>
                        <input name="url"
                               type="text"
                               value={this.state.url}
                               onChange={this.handleChange}/>
                        <label>Link Title:</label>
                        <input name="title"
                               type="text"
                               value={this.state.title}
                               onChange={this.handleChange}/>
                        <label>Link Thumbnail Image (optional):</label>
                        <input name="image"
                               type="text"
                               value={this.state.imageUrl}
                               onChange={this.handleChange}/>
                        <label>Comment (optional):</label>
                        <textarea name="description"
                                  value={this.state.description}
                                  onChange={this.handleChange}/>
                        <input id="btnEditPost"
                               type="submit"
                               value="Submit"
                               onClick={this.handleSubmit}/>
                    </form>
                </div>
            </section>
        )
    }

}