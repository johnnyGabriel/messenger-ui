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

    componentDidUpdate() {

        const el = this.refs.wrapperEl
        el.scrollTop = el.scrollHeight

    }

    render() {

        const { messages, currentUser } = this.props

        return (
            <div ref="wrapperEl" className="messages-wrapper">
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