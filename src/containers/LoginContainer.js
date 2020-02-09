import React, { Component } from 'react'
import { Col } from "react-bootstrap";
import { connect } from 'react-redux';
import AuthenticationService from "../servies/AuthenticationService";
import Login from "../components/login/Login";
import { activeUser } from "../actions";

class LoginContainer extends Component {

    state = {
        formError: {
            hasError: false,
            type: '',
        }
    };

    render() {
        return (
            <Col
                md={{span: 6, offset: 3}}
                lg={{span: 3, offset: 4}}
                className={'mt-5'}>
                <Login error={this.state.formError} onLogin={(email, password) => this.handleLogin(email, password)}/>
            </Col>
        )
    }

    handleLogin(email, password) {
        AuthenticationService.login(email, password)
            .then(user => {
                this.setState({formError: {
                        hasError: false,
                        type: '',
                    }});
                this.props.dispatchActiveUser(user);
                this.props.history.push(this.props.location.redirectTo || '/');
            }).catch(() => {
            this.setState({formError: {
                    hasError: true,
                    type: 'INVALID_CREDENTIALS',
                }});
        })
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.activeUser,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchActiveUser: (user) => dispatch(activeUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
