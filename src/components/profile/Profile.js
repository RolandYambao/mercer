import '../Components.css';
// import React from 'react';
import React, { Component } from "react";
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

// import { Link } from 'react-router-dom';


class displayProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log(localStorage) //Shows local token in console
    let token = localStorage.getItem('jwtToken')  //grabs token 
    setAuthToken(token); //function to auth saved token (seprate JS file)
    axios.get(`${REACT_APP_SERVER_URL}/users/your-stuff`,
      {
        header: { 'Access-Control-Allow-Origin': '*' }
      })
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data.user
        })
        // console.log(this.setState);
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  }

  render() {
    return (
      <div>
        <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <figure className="avatar">
                  <img src={this.state.data.profilePic} style={{ width: '150px', height: '150px' }} alt="Profile Pic" />
                </figure>
                <form>
                  <div className="content">
                    <table className="table-profile">
                      <tr>
                        <td>Name: {this.state.data.userName}</td>
                      </tr>
                      <tr>
                        <td>Email: {this.state.data.email}</td>
                      </tr>
                      <tr>
                        <td>Phone Number: {this.state.data.phone}</td>
                      </tr>
                      <tr>
                        <td>Address: {this.state.data.address}</td>
                      </tr>
                    </table>
                  </div>
                  <a id="editProfile" className="button is-block is-fullwidth is-primary is-medium">Edit Profile<i className="fa fa-sign-in" aria-hidden="true"></i></a>
                  <a id="viewSales" className="button is-block is-fullwidth is-info is-medium m-t-15">View Your Sales<i className="fa fa-sign-in" aria-hidden="true"></i></a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }

}

export default displayProfile;