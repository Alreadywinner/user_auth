import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateRoute } from "../actions/authAction";
import '../App.css';
import '../style.css';

class Home extends Component{
    
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = ()=>{
        this.props.authenticateRoute();
    }
    render(){   
        return(
        <div>
            <header>
                <div className="containered">
                    <div className="logo-box">
                    <Link to = "/"><h1>Welcome</h1></Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/SignUp">Sign Up</Link></li>
                            <li><Link to="/LogIn">Log In</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div>
            <section className="intro clearfix">
                <div className="d-flex h-100">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-md-6 intro-info order-md-first order-last">
                            <h2>Stripe API<br /><span>Implementation</span></h2>
                            <div>
                                <button className="btn-get-started scrollto" > <Link to="/stripe" onClick = {this.onSubmit()}>Get Started</Link></button>
                            </div>
                            <div className="col-md-6 intro-img order-md-last order-first">
                                {/* <img src="img/intro-img.svg" alt="" className="img-fluid" /> */}
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        authenticateRoute : () => {dispatch(authenticateRoute());}
    }
}

export default connect(null,mapDispatchToProps)(Home);