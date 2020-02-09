import React from 'react';
import { ListGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    disabledLink: {
        'pointer-events': 'none',
        color: 'grey'
    },
});

export default ({hotels, userId}) => {

    const classes = useStyles();
    return (
            <Col md={6}>
                <ListGroup>
                    {hotels.map((item, i) => {
                        return <ListGroup.Item key={i}>
                            <Link
                                className={(item.reserved.userId && item.reserved.userId !== userId) ? classes.disabledLink : ''}
                                to={'/hotel/' + item.id}>{item.name} - {item.location} </Link>
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </Col>
    )
}
