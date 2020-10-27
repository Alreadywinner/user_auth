import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateRoute } from "../actions/authAction";
import { userLogout } from '../actions/logOutActions';
import '../App.css';
class stripe extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = ()=>{
        this.props.userLogout();
    }
    componentWillUnmount(){
        console.log("component is being unmounted");
        window.location.reload();
    }
    render(){
        // this.auth = this.props.auth;
        // if(this.auth === "successful"){
        //     return <Redirect to="/" />
        // }
        return(
        <div>
            <header>
                <div className="containered">
                    <div className="logo-box">
                    <Link to ="/"><h1>Welcome</h1></Link>
                    </div>
                    <nav>
                        <ul>
                            <li onClick = {this.onSubmit}><Link to="/">Log Out</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
       auth:state.pizza.email
     }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        userLogout : () => {dispatch(userLogout());}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(stripe);