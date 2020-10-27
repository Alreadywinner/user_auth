const axios = require('axios');
export const userSignUP = (email,password) => {
    return(dispatch) => {
    axios.post('/api/signUp/',{email,password})
         .then(res => {
            dispatch(userSignUP2(res.data));})
         .catch(err => {
                if(err.response){
                    dispatch(userSignUP2(err.response.data));
                }
    }); 
   }
} 

export const userSignUP2 = (test) =>{
return{
        type:'USER_SIGNUP',
        payload:{
            email:test
        }
    }
} 