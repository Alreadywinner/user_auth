const initState ={
    path : " ",
    isAuthenticated : false
}
const authReducer = (state = initState,action) =>{
    if(action.type === 'ROUTE_AUTH'){
        console.log(action.payload);
        if(action.payload.hello === '/stripe'){
            state.path = action.payload.hello;
            state.isAuthenticated = true;
        }
        else{
            state.path = action.payload.hello;
        }
        return{
            path : state.path,
            isAuthenticated:state.isAuthenticated
        }
    }
    else{
        return(state);
    }
}
export default authReducer;