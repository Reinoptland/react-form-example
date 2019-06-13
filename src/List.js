import React from 'react'

class List extends React.Component {
    render(){
        return (
            <ul>
                { this.props.users.map(user => <li key={user.name}>{user.name}, {user.age}</li>)}
            </ul>
        )
    }
}

export default List