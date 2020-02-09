import { default as getHotelsRequest } from '../fake-backend/getHotels';
const getHotels = () => {
    const promise = new Promise((resolve, reject) => {
        resolve(getHotelsRequest());
    });
    return promise;
};

const HotelsService = {
    getHotels,
};

export default HotelsService;
