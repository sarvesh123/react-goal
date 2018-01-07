import React, { Component } from 'react'
import Pagetitle from './Pagetitle'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatMessages: '',
            noChatMessage: '',
            chatMessage: ''
        }
        
        fetch('http://localhost:3000/api/chats/getChats', {
            method: 'POST',
            headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
            body: JSON.stringify({
                    sender: this.props.match.params.sender,
                    receiver: this.props.match.params.receiver,
                    message: this.state.chatMessage
                })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status === true) {
                const listItems = responseJson.messages.map((chat) => 
                    <li key={chat._id}>{chat.message}</li>
                )
                this.setState({
                    chatMessages: listItems
                })
            }
            else {
                this.noChatMessage = 'You haven\'t chatted yet'
            }
        })

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3000/api/chats/', {
            method: 'POST',
            headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
            body: JSON.stringify({
                    sender: '58481ff7d896c82404f34cba',
                    receiver: this.props.match.params.userId,
                    message: this.state.chatMessage
                })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
        })
        .catch((error) => {
			console.log(error);
		})
    }

    render() {
        return (
            <div>
                <Pagetitle title="Chat with User" />
                <ul>{this.state.chatMessages}</ul>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea name="chatMessage" onChange={this.handleChange} value={this.state.chatMessage} />
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        )
    }
}

export default Chat