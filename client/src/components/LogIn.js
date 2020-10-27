import React,{ Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {userlogIN} from '../actions/loginAction';
import { authenticateRoute } from "../actions/authAction";

class LogIn extends Component{
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
        this.props.userlogIN(this.state.email,this.state.password);
        this.props.authenticateRoute();
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
      if(this.props.path === '/stripe'){
        return <Redirect to="/stripe"/>
      }
  }
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
                    <button type="submit" className="contact-submit" onClick = {this.onSubmit}>Log In</button>
                    </fieldset>
                    <p className="copyright">Dont Have an account ? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
      </div>
  );  
}
}
const mapStateToProps = (state)=>{
    return{
      userEmail:state.pasta.email,
      userErrors:state.pasta.errored,
      path:state.macroni.path
    }
  }

const mapDispatchToProps = (dispatch)=>{
    return{
        userlogIN : (email,password) => {dispatch(userlogIN(email,password));},
        authenticateRoute : () => { dispatch(authenticateRoute());}
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(LogIn);