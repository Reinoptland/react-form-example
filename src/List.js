import React from 'react'

class List extends React.Component {
    render(){
        return (
            <ul>
                { this.props.names.map(name => <li key={name}>{name}</li>)}
            </ul>
        )
    }
}

export default List