import React from 'react';
import { connect,useDispatch,useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authenticateRoute } from "../actions/authAction";

export const ProtectedRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
})=>{
    const dispatch = useDispatch();
    dispatch(authenticateRoute());
    const counter = useSelector(state => state.macroni.isAuthenticated);
    const red = useSelector(state => state.macroni.path);
    console.log(counter);    
    return(   
        <Route {...rest} component = {(props) => (
        counter ?
        (
            <Component {...props} />
        ):(
            <Redirect to={red} />
        ) 
        )
    }/> 
         );
}

 const mapStateToProps = (state)=>{
     return{
       path:state.macroni.path,
       isAuthenticated : state.macroni.isAuthenticated
     } 
}

const mapDispatchToProps = (dispatch)=>{
       return{
           authenticateRoute : () => {dispatch(authenticateRoute());}
       }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProtectedRoute);