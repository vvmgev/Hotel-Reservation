import React from 'react';
import { Row } from 'react-bootstrap'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    myButton: {
        height: '80px',
        backgroundColor: '#563d7c',
        padding: '20px 40px',
        color: 'white',
    },
});

export default () => {
    const classes = useStyles();
    return (
        <header className={classes.myButton}>
            <Row>
                <p className={'h2'}>Hotel Reservation</p>
            </Row>
        </header>
    )
}
