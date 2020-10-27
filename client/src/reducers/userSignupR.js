const initState ={
    email : " ",
    errored : " "
}
const userSignupR = (state = initState,action) =>{
    if(action.type === 'USER_SIGNUP'){
        console.log(action.payload.email);
        if(action.payload.email.errors){
            state.errored = action.payload.email.errors
        }
        else{
            state.email = action.payload.email;
        }
        return{
            email : state.email,
            errored: state.errored
        }
    }
    else{
        return(state);
    }
}
export default userSignupR;