import React from 'react'

class Form extends React.Component {
    state = { name: '', age: '' }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
        this.setState({ name: '', age: ''})
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
                name={'name'}
                />
                <br/>
                <input 
                onChange={this.handleChange}
                placeholder={'A age her please'} 
                value={this.state.age}
                name={'age'}
                />
                <br/>
                <button type="submit">SEND NAME</button>
            </form>
        )
    }
}

export default Form