import React from 'react';
import Table from './Table'
import Form from './Form'

class LinkContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favLinks: [],
        }
    }

    removeCharacter = (index) => {
        if (index > -1) {
            this.state.favLinks.splice(index, 1);
            this.setState({
                favLinks: [...this.state.favLinks],
            })
        }
    }

    handleSubmit = (favLink) => {
        favLink.map((link) =>
            this.setState({
                favLinks: [...this.state.favLinks, link],
            })
        )
    }

    render() {
        return (
            <div className='container'>
                <h1>Contact Me!</h1>
                <p>Please leave your name, email, a message for me to read</p>

                <Table linkData={this.state.favLinks} removeLink={this.removeCharacter} />

                <br />

                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default LinkContainer