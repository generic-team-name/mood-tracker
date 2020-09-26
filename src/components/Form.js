import React from 'react';
import { Form as Fo, ButtonGroup, ToggleButton, Button } from 'react-bootstrap';

class SubmitForm extends React.Component {
    constructor(props) {

    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {

    }
}

export const Form = () => (
    <Fo onSubmit={SubmitHandler}>
        <Fo.Row>
            <ButtonGroup toggle size="md" onChange={ChangeHandler}>
                <ToggleButton type="radio" value="1" variant="success">Great</ToggleButton>
                <ToggleButton type="radio" value="2" variant="primary">Good</ToggleButton>
                <ToggleButton type="radio" value="3" variant="info">Okay</ToggleButton>
                <ToggleButton type="radio" value="4" variant="warning">Bad</ToggleButton>
                <ToggleButton type="radio" value="5" variant="danger">Terrible</ToggleButton>
            </ButtonGroup>
        </Fo.Row>
        <br />
        <Fo.Row>
            <Fo.Label>Write about your day.</Fo.Label>
            <Fo.Control as="textarea" rows="3" onChange={ChangeHandler} />
        </Fo.Row>
        <br />
        <Fo.Row>
            <Button variant="primary" type="submit">Submit</Button>
        </Fo.Row>
    </Fo>
)