const axios = require('axios');
export const userLogout = () =>{
    return(dispatch) => {
        axios.get('/api/logOut')
             .then(res => {
                dispatch(userLogout2(res.data));
            })
            .catch(err => console.log(err.response.data));   

    }
}

export const userLogout2 = (test)=>{
    return{
        type:'USER_LOGOUT',
        payload:{
            hello:test
        }
    }
}