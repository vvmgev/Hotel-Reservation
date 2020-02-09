import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'

export default ({onLogin, error}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
            <Form onSubmit={event => {
                event.preventDefault();
                onLogin(email, password);
            }}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={event => setEmail(event.target.value)} type="text"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={event => setPassword(event.target.value)} type="password"/>
                </Form.Group>
                {error.hasError && <Form.Group>
                    <Alert variant={'danger'}>Couldn't find your</Alert>
                </Form.Group>}
                <Button type="submit">Log in</Button>
            </Form>
    )
}
