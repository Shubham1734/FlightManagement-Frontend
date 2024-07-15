export const ADD_USER = 'ADD_USER';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addUser  = (user:any) =>({
    type : 'ADD_USER',
    payload : user
});