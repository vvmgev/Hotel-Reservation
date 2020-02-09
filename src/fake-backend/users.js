import token from './generateToken';

export default [
    {
        id: 1,
        email: 'user@user.com',
        password: 'user',
        token: token(),
    },
    {
        id: 2,
        email: 'test@test.com',
        password: 'test',
        token: token(),
    },
]
