import React from 'react'
import { render } from 'react-dom'
import Messenger from './containers/Messenger'

const user = window.prompt('Digite seu nome:', 'anonimo') || 'anonimo'

render(
    
    <Messenger
        uri="ws://192.168.0.14:8080"
        user={ user } />,

    document.querySelector('#content')
)