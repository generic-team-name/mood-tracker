import React from 'react';
import { Card } from 'react-bootstrap';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const Cards = () => {
    // try {
        return (
            <div className="scrollable">
                {JSON.parse(localStorage.getItem('array')).map(array => {
                    return (
                        <Card bg={array[1]} text='white' style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Title>{Date(array[0]).toLocaleString({month: 'long', day: 'numeric', timeZone: 'false' })}</Card.Title>
                                <Card.Text>
                                    {array[2]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        )
    // } catch(err) {
    //     return (
    //         <div>
    //             <br />
    //             <br />
    //             <h4>You don't have any current logs!</h4>
    //             <p>Create one above to get started.</p>
    //         </div>
    //     )
    // }
}