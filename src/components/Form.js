import React, { Component } from 'react';
import { Form as Fo, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';

export default class SubmitForm extends Component {
    constructor() {
        super();
        this.state = {
            mood: '',
            entry: ''
        };
        var array = [];
        localStorage.setItem('array', array);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        const mood = this.state.mood;
        const entry = this.state.entry;
        alert('This was submitted: ' + mood + entry);
        event.preventDefault();
        let a = [localStorage.getItem('array')]
        a.push([Date.now(), mood, entry]);
        localStorage.setItem('array', a);
    }

    render() {
        return (
            <Fo onSubmit={this.handleSubmit}>
                <Fo.Row>
                    <ToggleButtonGroup exclusive="true" name="mood" toggle size="md">
                        <ToggleButton type="radio" value="5" variant="success" onChange={this.handleChange}>Great</ToggleButton>
                        <ToggleButton type="radio" value="4" variant="primary" onChange={this.handleChange}>Good</ToggleButton>
                        <ToggleButton type="radio" value="3" variant="info" onChange={this.handleChange}>Okay</ToggleButton>
                        <ToggleButton type="radio" value="2" variant="warning" onChange={this.handleChange}>Bad</ToggleButton>
                        <ToggleButton type="radio" value="1" variant="danger" onChange={this.handleChange}>Terrible</ToggleButton>
                    </ToggleButtonGroup>
                </Fo.Row>
                <br />
                <Fo.Row>
                    <Fo.Label>Write about your day.</Fo.Label>
                    <Fo.Control name="entry" value={this.state.value} as="textarea" rows="3" onChange={this.handleChange} />
                </Fo.Row>
                <br />
                <Fo.Row>
                    <Button variant="primary" value="submit" type="submit">Submit</Button>
                </Fo.Row>
            </Fo>
        );
    }
}