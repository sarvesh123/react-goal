import React, { Component } from 'react';
import Pagetitle from './Pagetitle';
import { Link } from 'react-router-dom'

class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            usersListItems: '',
            noUsersMessage: ''
        }

        fetch('http://localhost:3000/api/users/getOnlineUsers', {
            method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                userId: this.props.match.params.id
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.status === true) {
                const listItems = responseJson.users.map((user) => 
                    <li key={user._id}><Link to={`/chat/${this.props.match.params.id}/user/${user._id}`}>{user.name}</Link></li>
                )
                this.setState({
                    usersListItems: listItems
                })
            }
            else {
                this.setState({
                    noUsersMessage: responseJson.message
                })
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <Pagetitle title="My Account Page"/>
                <div>
                    <span>{this.state.noUsersMessage}</span>
                    <ul>{this.state.usersListItems}</ul>
                </div>                
            </div>
        )
    }
}

export default MyAccount;