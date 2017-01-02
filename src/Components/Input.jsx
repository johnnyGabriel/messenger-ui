import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    static get popTypes() {
        return { onFinish: React.PropTypes.func.isRequired }
    }

    handleSubmit(event) {

        event.preventDefault()
        this.props.onFinish(this.state.value)
        this.setState({ value: '' })

    }

    handleChange(event) {

        this.setState({ value: event.target.value })

    }

    render() {

        return (
            <form onSubmit={ this.handleSubmit.bind(this) }>
                <input
                    type="text"
                    className="form-control"
                    onChange={ this.handleChange.bind(this) }
                    value={ this.state.value } />
            </form>       
        )

    }

}

export default Input