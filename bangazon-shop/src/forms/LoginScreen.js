import React, { Component } from 'react';
import logo from './../images/logo.png';
// import UserProfile from './UserProfile'; //for edit user
import './LoginScreen.css';
import Header from './../Header'; // Nav bar
import ProductsContainer from './../ProductsContainer'; // for products listing
import { Route } from 'react-router-dom';


export default class LoginScreen extends Component {
    state = {
        fields: {
          email: '',
          password: ''
        },
        fieldErrors: false,
        user: {},
        userAuthed: false
      };

  onFormSubmit = (evt) => {
    fetch(`http://localhost:4000/users?email=${this.state.fields.email}&&password=${this.state.fields.password}`)
    .then((data)=>{
      return data.json();
    }).then((userArray)=>{
        if (userArray.length===0){
            console.log("NO USERS");
            this.setState({ 
                fieldErrors: true
            });
        }else{
            this.setState({ 
                user: userArray[0],
                userAuthed: true,
                fields: {
                    email: '',
                    password: ''
                }
            });
        }
        console.log(this.state.user);
    })
    evt.preventDefault();
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

    logout = () =>{
        this.setState({
        userAuthed: false
        })
    }

  render() {
      if(!this.state.userAuthed){
        return (
        <div className="jumbotron jumbotron-fluid">
             <div className="container">
             <div className="logoimg"><img src={logo} alt="Logo"/></div>
              <h1 className="loginHeader">Login</h1>
                  <form onSubmit={this.onFormSubmit}>
                      <div className="form-group">
                          <input
                              type="email" 
                              className="form-control"
                              placeholder='Email'
                              name='email'
                              value={this.state.fields.email}
                              onChange={this.onInputChange}
                          />
                      </div>
                      <div className="form-group">
                          <input
                              type="password" 
                              className="form-control" 
                              placeholder='Password'
                              name='password'
                              value={this.state.fields.name}
                              onChange={this.onInputChange}
                          />
                      </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
        </div>
          );
      }else{
        return (
            <div>
                <Header logout={this.logout}/>
                {/* <UserProfile user={this.state.user}/> */}
                <Route path='/products' component={ProductsContainer} />
            </div>
        );
      }
  }
}