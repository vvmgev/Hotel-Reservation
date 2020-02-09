import { ACTIVE_USER, HOTELS_LIST, REMOVE_ACTIVE_USER, RESERVE_HOTEL } from '../types'

export const activeUser = user => {
    return {
    type: ACTIVE_USER,
    user,
}};

export const removeActiveUser = user => {
    return {
        type: REMOVE_ACTIVE_USER,
        user,
}};

export const hotelsList = hotels => {
    return {
        type: HOTELS_LIST,
        hotels,
}};

export const reserveHotel = inputs => {
    return {
        type: RESERVE_HOTEL,
        inputs,
    }};
