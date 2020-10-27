const axios = require('axios');
export const userlogIN = (email,password) => {
    return(dispatch) => {
    axios.post('/api/logIn/',{email,password})
         .then(res => {
            dispatch(userlogIN2(res.data));})
         .catch(err => {
                if(err.response){
                    dispatch(userlogIN2(err.response.data));
                }
    }); 
   }
}

export const userlogIN2 = (test) =>{
return{
        type:'USER_LOGIN',
        payload:{
            email:test
        }
    }
} 
