import { combineReducers } from 'redux'
import activeUserAction from './activeUserAction'
import hotelsListAction from './hotelsListAction'
export default combineReducers({
    activeUser: activeUserAction,
    hotelsList: hotelsListAction,
})
