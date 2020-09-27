import React from 'react';
import { Form as Fo, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class SubmitForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mood: '',
            entry: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: event.target.value })
    }

    handleSubmit(event) {
        alert('This was submitted: ' + this.state.mood + this.state.entry + this.state.date);
        event.preventDefault();
    }

    render() {
        return (
            <Fo onSubmit={this.handleSubmit}>
                <Fo.Row>
                    <ToggleButtonGroup toggle size="md" onChange={this.handleChange}>
                        <ToggleButton type="radio" value="1" variant="success">Great</ToggleButton>
                        <ToggleButton type="radio" value="2" variant="primary">Good</ToggleButton>
                        <ToggleButton selected type="radio" value="3" variant="info">Okay</ToggleButton>
                        <ToggleButton type="radio" value="4" variant="warning">Bad</ToggleButton>
                        <ToggleButton type="radio" value="5" variant="danger">Terrible</ToggleButton>
                    </ToggleButtonGroup>
                </Fo.Row>
                <br />
                <Fo.Row>
                    <Fo.Label>Write about your day.</Fo.Label>
                    <Fo.Control value={this.state.value} as="textarea" rows="3" onChange={this.handleChange} />
                </Fo.Row>
                <br />
                <Fo.Row>
                    <input variant="primary" value="submit" type="submit">Submit</input>
                </Fo.Row>
            </Fo>
        );
    }
}

export default SubmitForm;