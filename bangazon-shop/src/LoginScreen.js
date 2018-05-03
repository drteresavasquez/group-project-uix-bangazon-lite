import React, { Component } from 'react';
import Happy from './Happy';

export default class LoginScreen extends Component {
    state = {
        fields: {
          email: '',
          password: ''
        },
        user: {},
        userAuthed: false
      };

  onFormSubmit = (evt) => {
    fetch(`http://localhost:3000/users?email=${this.state.fields.email}&&password=${this.state.fields.password}`)
    .then((data)=>{
      return data.json();
    }).then((data2)=>{
        this.setState({ 
            user: data2[0],
            userAuthed: true,
            fields: {
                email: '',
                password: ''
            }
        });
        console.log(this.state.user);
    })
    evt.preventDefault();
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  render() {
      if(!this.state.userAuthed){
        return (
            <div className="container">
              <h1>Login</h1>
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
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
          );
      }else{
        return (
            <Happy user={this.state.user}/>
        );
      }
  }
}