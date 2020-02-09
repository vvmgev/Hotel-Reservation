import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import HotelService from "../servies/HotelService";
import { Row } from "react-bootstrap";
import {hotelsList, reserveHotel} from "../actions";
import Hotels from "../components/hotels/Hotels";
import HotelFrom from "../components/hotelForm/HotelForm";

class HotelsContainer extends Component {

    render() {
        const { activeUser: {id: userId}, inline, match: {params: { id }} } = this.props;
        const hotelId = Number(id);
        const data = {};
        if (!inline) {
            data.path = '/hotel';
        }
        if(hotelId) {
            data.hotelId = hotelId;
        }
        return (
            <Fragment>
                <Row>
                    {inline && <Hotels userId={userId} hotels={this.props.hotelsList} /> }
                    <HotelFrom hotels={this.props.hotelsList}
                               hotel={this.props.hotelsList.find(item => item.id === hotelId)}
                               inline={inline}
                               userId={userId}
                               onReserve={this.props.dispatchHotelReservation}
                               history={this.props.history}
                               {...data}

                   key={+new Date()}
                    />
                </Row>
            </Fragment>
        )
    }

    componentDidMount() {
        if (this.props.hotelsList.length) return;
        HotelService.getHotels().then(this.props.dispatchHotels)
    }
}

const mapStateToProps = (state) => {
    return {
        hotelsList: state.hotelsList,
        activeUser: state.activeUser,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchHotels: (hotels) => dispatch(hotelsList(hotels)),
        dispatchHotelReservation: (inputs) => dispatch(reserveHotel(inputs)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelsContainer);
