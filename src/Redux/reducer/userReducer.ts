// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userReducer = (state = {},action:any) => {
    switch(action.type){
        case 'ADD_USER':
            console.log(typeof(action.payload))
            return action.payload;

    default: 
        return state
    }
}
export default userReducer;