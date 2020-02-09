import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import AuthenticationService from "../../servies/AuthenticationService";
import { removeActiveUser } from "../../actions";

class Sidebar extends Component {
    render() {
        return (
            <aside>
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="px-2" to="/hotel">Hotel List</Link>
                            <Link className="px-2" to="/reservation">New Reservation</Link>
                            {AuthenticationService.isLoggedIn() ?
                                <Link onClick={() => this.onLogout()} className="px-2" to="login">Logout</Link> : ''}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </aside>
        )
    }

    onLogout() {
        AuthenticationService.logout();
        this.props.dispatchActiveUser({});
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.activeUser,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchActiveUser: (user) => dispatch(removeActiveUser(user))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
