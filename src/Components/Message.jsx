import React, { Component } from 'react'
import classNames from 'classnames'
import Popover from 'react-bootstrap/lib/Popover'

const { string, bool } = React.PropTypes

class Message extends Component {

    constructor(props) {
        super(props)
    }

    static get propTypes() {
        return {
            text: string.isRequired,
            isCurrentUser: bool.isRequired,
            user: string.isRequired
        }
    }

    render() {

        const { text, isCurrentUser, user } = this.props

        const wrapperClass = classNames({
            'pull-right': isCurrentUser,
            'pull-left': !isCurrentUser,
        })

        return (
            <div className="message">
                <div className={ wrapperClass }>
                    <Popover
                        placement={ isCurrentUser ? 'left' : 'right' }
                        title={ isCurrentUser ? '' : user }>
                            { text }
                    </Popover>
                </div>
            </div>
        )

    }

}

export default Message