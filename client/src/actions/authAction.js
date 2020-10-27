const axios = require('axios');
export const authenticateRoute = () =>{
    return(dispatch) => {
        axios.get('/api/stripe/')
            .then(res => {
                dispatch(authenticateRoute2(res.data));
            })
            .catch(err => {
                console.log(err.response.data);
                if(err.response.data === '/login'){
                    dispatch(authenticateRoute2(err.response.data));
                }
            });   

    }
}

export const authenticateRoute2 = (test)=>{
    return{
        type:'ROUTE_AUTH',
        payload:{
            hello:test
        }
    }
}