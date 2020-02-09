import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import PageNotFound from "./pageNotFound/PageNotFound";
import LoginContainer from "../containers/LoginContainer";
import HotelsContainer from "../containers/HotelsContainer";
import Home from "./home/Home";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import PrivateRoute from "./PrivateRoute";
import AuthenticationService from "../servies/AuthenticationService";
import store from "../store";
import { activeUser } from "../actions";

// alert options
const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 3000,
    offset: '30px',
    color: 'red',
    transition: transitions.SCALE
};

class App extends Component {

    constructor(props) {
        super(props);
        if (AuthenticationService.isLoggedIn() && !store.getState().activeUser.id) {
            store.dispatch(activeUser(AuthenticationService.getUser()))
        }
    }

    render() {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
            <Header />
                <SideBar />
                <Container>
                    <Switch>
                        <Route path="/login" component={LoginContainer} />
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute path='/hotel/:id' inline={false}  component={HotelsContainer} />
                        <PrivateRoute path='/hotel' inline={true} component={HotelsContainer} />
                        <PrivateRoute path='/reservation' inline={false} component={HotelsContainer} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Container>
            </AlertProvider>
        )
    }
}

export default App;
