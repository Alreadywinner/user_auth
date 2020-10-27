const initState ={
    email : " ",
    errored : " ",
    isAuth : false
}
const userlogINR = (state = initState,action) =>{
    if(action.type === 'USER_LOGIN'){
        console.log(action.payload.email);
        if(action.payload.email.errors){
            state.errored = action.payload.email.errors
        }
        else{
            state.email = action.payload.email;
            state.isAuth = true;
        }
        return{
            email : state.email,
            isAuth : state.isAuth,
            errored: state.errored
        }
    }
    else{
        return(state);
    }
}
export default userlogINR;