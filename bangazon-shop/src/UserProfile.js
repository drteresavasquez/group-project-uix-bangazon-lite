import React, { Component } from 'react';


export default class UserProfile extends Component {
    state = {
        fields: this.props.user
      };

      onFormSubmit = (evt) => {
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(this.state.fields), // data can be `string` or {object}!
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    
        evt.preventDefault();
      };
    
      onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
      };
    
      render() {
        return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>Update User Profile</h1>
    
            <form onSubmit={this.onFormSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputFN">First Name</label>
                        <input 
                            type="text" className="form-control" id="inputFN" placeholder='First Name'
                            name='first_name'
                            value={this.state.fields.first_name}
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="inputLN">Last Name</label>
                        <input 
                            type="text" className="form-control" id="inputLN" placeholder='Last Name'
                            name='last_name'
                            value={this.state.fields.last_name}
                            onChange={this.onInputChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email"
                            name='email'
                            value={this.state.fields.email}
                            onChange={this.onInputChange}
                            id="inputEmail4"
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword4" 
                            placeholder="Password"
                            name='password'
                            value={this.state.fields.password}
                            onChange={this.onInputChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="address">Address</label>
                    <input 
                        id="address"
                        className="form-control" 
                        placeholder='Address'
                        name='address'
                        value={this.state.fields.address}
                        onChange={this.onInputChange}
                    />
                </div>

                <div className="form-row">

                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="text" className="form-control" id="phone" placeholder='Phone'
                            name='phone'
                            value={this.state.fields.phone}
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input 
                            id="city"
                            className="form-control" 
                            placeholder='City'
                            name='city'
                            value={this.state.fields.city}
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="zip">Zip Code</label>
                        <input 
                            id="zip"
                            className="form-control" 
                            placeholder='ZIP'
                            name='zip'
                            value={this.state.fields.zip}
                            onChange={this.onInputChange}
                        />
                    </div>
                </div>

                
          </div>
            <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>

          </div>
        </div>
        );
      }
}
  