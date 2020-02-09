import { HOTELS_LIST, RESERVE_HOTEL } from "../types";
const hotelsListAction = (state = [], action) => {
    switch (action.type) {
        case HOTELS_LIST:
            return [
                ...state,
                ...action.hotels,
            ];
        case RESERVE_HOTEL:
            state.find(item => {
                if (item.id === Number(action.inputs.hotelId)) {
                    item.reserved = action.inputs;
                    return true
                }
                return null;
            });
            return [
                ...state,
            ];
        default:
            return state
    }
};
export default hotelsListAction
