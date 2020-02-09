let cache = {};
const clear = (key) => {
    if(key) {
        delete cache[key];
        localStorage.removeItem(key)
    } else {
        cache = {};
        localStorage.clear();
    }
};

const toObject = (value) => {
    try {
        return JSON.parse(value);
    } catch (e) {
        return null;
    }
};

const retrieve = (key, type) => {
    if (typeof cache[key] !== 'undefined') {
        return cache[key];
    }

    const storageValue = localStorage.getItem(key);

    if (type === 'string') {
        return typeof storageValue !== 'undefined' && storageValue !== null ? String(storageValue) : null;
    } else if (type === 'number') {
        return typeof storageValue !== 'undefined' && storageValue !== null ? Number(storageValue) : null;
    } else if (type === 'boolean') {
        return typeof storageValue !== 'undefined' && storageValue !== null ? Boolean(storageValue) : null;
    } else if (type === 'object') {
        return toObject(storageValue);
    }
};

const put = (key, value) => {
        let storageValue;

        if (typeof value === 'boolean') {
            storageValue = value ? 'true' : 'false';
        } else if (typeof value === 'object') {
            storageValue = JSON.stringify(value);
        } else if (value) {
            storageValue = value.toString();
        } else {
            storageValue = value;
        }
        localStorage.setItem(key, storageValue)
};

const retrieveString = (key) => {
    return retrieve(key, 'string');
};

const retrieveNumber = (key) => {
    return retrieve(key, 'number');
};

const retrieveBoolean = (key) => {
    return retrieve(key, 'boolean');
};

const retrieveObject = (key) => {
    return retrieve(key, 'object');
};

export default {
    retrieveBoolean,
    retrieveNumber,
    retrieveObject,
    retrieveString,
    clear,
    put,
}
