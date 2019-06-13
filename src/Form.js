import React from 'react'

class Form extends React.Component {
    state = { name: ''}

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addName(this.state.name)
        this.setState({ name: ''})
    } 

    render(){
        console.log('STATE', this.state)
        console.log('PROPS', this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>GIVE ME A NAME</label>
                <br/>
                <input 
                onChange={this.handleChange}
                placeholder={'A name her please'} 
                value={this.state.name}
                />
                <br/>
                <button type="submit">SEND NAME</button>
            </form>
        )
    }
}

export default Form