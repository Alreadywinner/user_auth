import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import {userSignUP} from '../actions/signupAction';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";


class signUp extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this);
        
        this.state = {
            email:"",
            password:""
          }
    }
    onSubmit = ()=>{
        this.props.userSignUP(this.state.email,this.state.password);
    }
    handleChange = (e) =>{
        this.setState({email:e.target.value});
    }
    handlepasswordChange = (e) =>{
        this.setState({password:e.target.value});
    }

render(){
    const{userErrors,userEmail} = this.props;
    if(userEmail.user){
        return <Redirect to="/LogIn" />
    }
//console.log(this.props.userEmail.errors);
let button;
let button2;
if(userErrors.email){
    button = <p className="warning">{userErrors.email}</p>
    userErrors.email = " "
}
if(userErrors.password){
    button2 = <p className="warning">{userErrors.password}</p>
    userErrors.password = " "
}
  return(
      <div>
          <header>
                <div className="containered">
                    <div className="logo-box">
                        <Link to ="/"><h1>Welcome</h1></Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/signUp">Sign Up</Link></li>
                            <li><Link to="/LogIn">Log In</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
          <div className = "body">
            <div className="container">  
                <div className="contact">
                    <h3>Stripe API</h3>
                    <h4>Contact us for custom quote</h4>
                    <fieldset>
                    <input placeholder="Your Email Address" type="email" required  onChange={this.handleChange} value = {this.state.email}/>
                    {button} 
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Password" type="password" required onChange={this.handlepasswordChange} value = {this.state.password}/>
                    {button2}
                    </fieldset>
                    <fieldset>
                    <button name="submit" type="submit" className="contact-submit" onClick = {this.onSubmit}>Sign Up</button>
                    </fieldset>
                    <p className="copyright">Already Have an account ? <Link to="/LogIn" title="Colorlib">Log In</Link></p>
                </div>
            </div>
        </div>
      </div>
  );  
}
}

const mapStateToProps = (state)=>{
    return{
      userEmail:state.patient.email,
      userErrors:state.patient.errored
    }
  }

const mapDispatchToProps = (dispatch)=>{
    return{
        userSignUP : (email,password) => {dispatch(userSignUP(email,password));}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(signUp);