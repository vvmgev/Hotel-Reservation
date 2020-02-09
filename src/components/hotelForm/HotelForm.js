import React, { Fragment, useState, useEffect, } from 'react';
import { Form, Button, Col } from "react-bootstrap";
import { useAlert } from 'react-alert'
import usePrevious from "../../hook/previousValue";

const HotelFrom = ({hotel,
                   hotelId,
                   hotels,
                   inline,
                   onReserve,
                   userId,
                   history,
                   path}) => {

    let initialState = {
        rooms: '',
        email: '',
        name: '',
        hotelId,
        userId,
        updatedReservationDate: '',
        createdReservationDate: ''
    };
    const isReserved = hotel && Object.keys(hotel.reserved).length;
    if(isReserved) {
        initialState = hotel.reserved;
    }

    const [inputs, setInputs] = useState(initialState);
    const alert = useAlert();
    const prevCount = usePrevious(inputs.updatedReservationDate);

    const updateDates = () => {
        const dateNow = new Date().toLocaleString();
        const dates = {
            updatedReservationDate: dateNow
        };
        if(!isReserved) {
            dates.createdReservationDate = dateNow;
        }
        setInputs(inputs => ({...inputs, ...dates}));
    };

    const clearState = () => {
        setInputs(initialState);
    };

    const handleChange = event => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    const handleSubmit = event => {
        event.preventDefault();
        updateDates();
        console.log(inputs.hotelId);
    };

    useEffect(() => {
        if (typeof prevCount !== 'undefined' && prevCount !== inputs.updatedReservationDate) {
            onReserve(inputs);
            clearState();
            alert.show('Success');
            if ( path ) {
                history.push(path)
            }
        }
    }, [inputs.updatedReservationDate]);

    return (
        <Col md={6}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" name="email" onChange={handleChange} value={inputs.email}/>
                </Form.Group>
                {!inline &&
                    <Fragment>
                        <Form.Group>
                            <Form.Label>Rooms</Form.Label>
                            <Form.Control type="number" name="rooms" onChange={handleChange} value={inputs.rooms}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" name="name" onChange={handleChange} value={inputs.name}/>
                        </Form.Group>
                    </Fragment>
                }
                <Form.Group>
                    <Form.Label>Select Hotel</Form.Label>
                    <Form.Control onChange={handleChange} defaultValue={initialState.hotelId} name="hotelId" as="select">
                        {hotels.map((item, i) => {
                            return <option
                                disabled={item.reserved.userId && item.reserved.userId !== userId}
                                key={i} value={item.id}>{item.name}</option>
                        })}
                    </Form.Control>
                </Form.Group>
                {!inline &&
                <Fragment>
                    <Form.Group>
                        <Form.Label>Created Reservation Date</Form.Label>
                        <Form.Control type="text" name="createdReservationDate" readOnly value={inputs.createdReservationDate}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Updated Reservation Date</Form.Label>
                        <Form.Control type="text" name="updatedReservationDate" readOnly value={inputs.updatedReservationDate}/>
                    </Form.Group>
                </Fragment>
                }
                <Button variant="primary" type="submit">Save</Button>
                {!inline && <Button onClick={clearState} className="ml-5" variant="secondary" type="button">
                    Revert
                </Button>}
            </Form>
        </Col>
    );
};

export default HotelFrom;
