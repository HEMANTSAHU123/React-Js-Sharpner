import React from 'react'
import Card from '../UI/Card'
import './userList.css';
const UserList = (props) => {
  return (
    <Card className="users">
    <ul>{props.users.map((user)=>{
        return (<li key={user.id}> {user.name}({user.age}years old)</li>
    )
    })}

    </ul>   
    </Card>
  )
}

export default UserList
