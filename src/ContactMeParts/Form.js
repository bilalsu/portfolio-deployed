import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            URL: '',
            message: '',

            list: [],
        }
    }

    handleChange = (input) => {
        this.setState({ ...this.state, [input.name]: input.value })
    }

    submitForm = (event) => {
        event.preventDefault()
        let name = this.state.name
        let url = this.state.URL
        let message = this.state.message
        let listArray = this.state.list
        listArray.push({ name: name, URL: url, message: message })
        this.setState({ ...this.state, list: listArray })
        this.setState({ name: '' })
        this.setState({ URL: '' })
        this.setState({ message: '' })
        this.props.handleSubmit(this.state.list)
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label>Name:</label>
                <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e.target)}
                />
                <label>Email:</label>
                <input
                    type='text'
                    name='URL'
                    value={this.state.URL}
                    onChange={(e) => this.handleChange(e.target)}
                />
                <label>Leave a message:</label>
                <input
                    type='text'
                    name='message'
                    value={this.state.message}
                    onChange={(e) => this.handleChange(e.target)}
                />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default Form