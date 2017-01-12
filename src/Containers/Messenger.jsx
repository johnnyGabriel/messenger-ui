import React, { Component }  from 'react'
import MessageList from '../components/MessageList'
import Input from '../components/Input'

const { string } = React.PropTypes

class Messenger extends Component {

    constructor(props) {

        super(props)
        this.state = { messages: [] }
        this.socketConnect()

    }

    static get propTypes() {
        return {
            uri: string.isRequired,
            user: string.isRequired
        }
    }

    socketConnect() {

        this.socket = new WebSocket(this.props.uri)

        this.socket.onopen = event =>
            console.log("connected", event)

        this.socket.onclose = event => {
            console.log("closed", event);
            alert('Conexão finalizada inesperadamente!')
        }

        this.socket.onerror = event => {
            console.log("error", event)
            alert('Erro na conexão! Tente novamente!')
        }

        this.socket.onmessage = event => {

            var messages = this.state.messages.splice(0)
            messages.push( JSON.parse(event.data) )

            this.setState({ messages: messages })

        }

    }

    handleInput(text) {

        var objMessage = {
            user: this.props.user,
            text: text,
            date: new Date()
        }

        this.socket.send(JSON.stringify(objMessage))

    }

    render() {

        return (
            <div>
                <MessageList messages={ this.state.messages } currentUser={ this.props.user } />
                <Input onFinish={ this.handleInput.bind(this) } />
            </div>
        )

    }

}

export default Messenger