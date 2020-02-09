import {ACTIVE_USER, REMOVE_ACTIVE_USER} from "../types";
const activeUserAction = (state = {}, action) => {
    switch (action.type) {
        case ACTIVE_USER:
            return action.user;
        case REMOVE_ACTIVE_USER:
            return action.user;
        default:
            return state
    }
};
export default activeUserAction
