import React, { Component } from 'react'
import classNames from 'classnames'
import Message from './Message'

const { array, string } = React.PropTypes

class MessageList extends Component {

    constructor(props) {
        super(props)
    }

    static get propTypes() {
        return {
            messages: array.isRequired,
            currentUser: string.isRequired
        }
    }

    render() {

        const { messages, currentUser } = this.props

        return (
            <div>
                { messages.map( msg =>
                    <Message
                        key={ msg._id }
                        text={ msg.text }
                        user={ msg.user }
                        isCurrentUser={ msg.user == currentUser } /> ) }
            </div>
        )

    }

}

export default MessageList