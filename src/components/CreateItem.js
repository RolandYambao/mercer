import "./Signup.css";
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class createItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    handleName(e) {
        this.setState({
            userName: e.target.value,
        });
    }

    handleSaleNumber(e) {
        this.setState({
            saleNumber: e.target.value,
        });
    }

    handleItemName(e) {
        this.setState({
            itemName: e.target.value,
        });
    }

    handlePrice(e) {
        this.setState({
            price: e.target.value,
        });
    }

    handleItemDescription(e) {
        this.setState({
            itemDescription: e.target.value,
        });
    }

    handleItemTags(e) {
        this.setState({
            itemTags: e.target.value,
        });
    }

    handleItemImage(e) {
        this.setState({
            itemImage: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const itemData = {
            saleNumber: this.state.saleNumber,
            itemName: this.state.itemName,
            price: this.state.price,
            itemDescription: this.state.itemDescription,
            itemTags: this.state.itemTags,
            itemImage: this.state.itemImage,
        };
        axios.post(`${REACT_APP_SERVER_URL}/users/item`, itemData)
            .then(response => {
                const { token } = response.data;
                // save token to localStorage
                localStorage.setItem('jwtToken', token);
                // set token to headers
                setAuthToken(token);
                // decode token to get the user data
                const decoded = jwt_decode(token);
                // set the current user
                this.props.nowCurrentUser(decoded); // funnction passed down as props.
            })
            .catch(error => {
                console.log('===> Error on login', error);
                alert('Either email or password is incorrect. Please try again');
            });
    };

    render() {
        if (this.state.redirect) return <Redirect to="/profile" />; // You can have them redirected to profile (your choice)

        return (
            <>
                <section className="container">
                    <div className="columns is-multiline">
                        <div className="column is-8 is-offset-2 register">
                            <div className="columns">
                                <div className="column left">
                                    <h1 className="title is-1">Super Cool Website</h1>
                                    <h2 className="subtitle colored is-4">
                                        Lorem ipsum dolor sit amet.
                                    </h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Corporis ex deleniti aliquam tempora libero excepturi vero
                                        soluta odio optio sed.
                                    </p>
                                </div>
                                <div className="column right has-text-centered">
                                    <h1 className="title is-4">Create an Item</h1>
                                    <p className="description">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                                    </p>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Sale Number"
                                                    name="saleNumber"
                                                    value={this.state.saleNumber}
                                                    onChange={this.handleSaleNumber.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Item Name"
                                                    name="itemName"
                                                    value={this.state.itemName}
                                                    onChange={this.handleItemName.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Price"
                                                    name="price"
                                                    value={this.state.price}
                                                    onChange={this.handlePrice.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Item Description"
                                                    name="description"
                                                    value={this.state.itemDescription}
                                                    onChange={this.handleItemDescription.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Tag(s)"
                                                    name="itemTags"
                                                    value={this.state.itemTags}
                                                    onChange={this.handleItemTags.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Item Image"
                                                    name="itemImage"
                                                    value={this.state.itemImage}
                                                    onChange={this.handleItemImage.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="button is-block is-primary is-fullwidth is-medium">
                                            Submit
                                        </button>
                                        <br />
                                        <small>
                                            <em>Lorem ipsum dolor sit amet consectetur.</em>
                                        </small>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="column is-8 is-offset-2">
                            <br />
                            <nav className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <span className="icon">
                                            <i className="fab fa-twitter"></i>
                                        </span>{" "}
                                        &emsp;
                                        <span className="icon">
                                            <i className="fab fa-facebook"></i>
                                        </span>{" "}
                                        &emsp;
                                        <span className="icon">
                                            <i className="fab fa-instagram"></i>
                                        </span>{" "}
                                        &emsp;
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>{" "}
                                        &emsp;
                                        <span className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <small
                                        className="level-item"
                                        style={{ color: "var(--textLight)" }}
                                    >
                                        &copy; Super Cool Website. 2022 All Rights Reserved.
                                    </small>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default createItem;
