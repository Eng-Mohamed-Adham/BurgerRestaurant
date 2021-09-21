import React, { Component } from 'react';
import joi from 'joi-browser';


class Login extends Component {

state = {
    username : "",
    password : "",
    errors:{}
};
schema = {
    username:joi.string().required(),
    password:joi.string().required()

}
validate = () => {
    const errors = {};
    //Clone State
    const state = { ...this.state };
    delete state.errors;
    const res = joi.validate(state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    //Set State
    this.setState({ errors });
    return errors;
  };

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();

        if(errors)return;

        //Call Backend
        console.log("submit");
     
        };

        
        handleChange = e => {
            //Clone
            let state = { ...this.state };
            //Edit
            state[e.currentTarget.name] = e.currentTarget.value;
            //Set state
            this.setState(state);
          };

    render() { 
        return(
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input
                        name = 'username'
                        value ={this.state.username}
                        onChange ={this.handleChange}
                        autoFocus
                          type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email"/>
                          {this.state.errors.username && (
                              <div className="alert alert-danger">
                              {this.state.errors.username}
                          </div>
                          )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        
                        <input
                         name = 'password'
                         value ={this.state.password}
                         onChange ={this.handleChange}
                         
                         type="password" className="form-control" id="password" placeholder="Password"/>
                       {this.state.errors.password && (
                               <div className="alert alert-danger">
                               {this.state.errors.password}
                           </div>
                       )}
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>  
        );
    }
}
export default Login;