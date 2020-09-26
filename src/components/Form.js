import React from 'react';
import { Form as Fo, ButtonGroup, ToggleButton, Button } from 'react-bootstrap';

export const Form = () => (
    <Fo>
        <Fo.Row>
            <ButtonGroup toggle size="md">
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
            <Fo.Control as="textarea" rows="3" />
        </Fo.Row>
        <br />
        <Fo.Row>
            <Button variant="primary" type="submit">Submit</Button>
        </Fo.Row>
    </Fo>
)