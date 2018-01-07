import React, { Component } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage'

class Signout extends Component {
    constructor(props) {
        super(props)
        reactLocalStorage.set('isLoggedIn', 'loggedOut')
        this.props.callback()
    }

    render() {
        return (
            <div>Signed Out</div>
        )
    }
}
export default Signout