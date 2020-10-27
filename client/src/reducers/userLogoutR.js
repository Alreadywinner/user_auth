const initState ={
    email : " "
}
const userLogoutR = (state = initState,action) =>{
    if(action.type === 'USER_LOGOUT'){
        console.log(action.payload.hello);
        state.email = action.payload.hello;
        return{
            email : state.email
        }
    }
    else{
        return(state);
    }
}
export default userLogoutR;