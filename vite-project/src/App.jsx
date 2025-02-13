import React, {useState,Fragment}from 'react';
import AddUsers from './components/Users/AddUsers'
import UserList from './components/Users/UserList';

function App() {
  const[userList,setUserList]=useState([]);
  const addUserHandler=(Uname,Uage)=>{
setUserList((prevUserList)=>{
return [
  
    ...prevUserList,
    {
    name:Uname,
    age:Uage,
    id:Math.random().toString()
  }

]
})
  }
  return (
    
      <Fragment>
    <AddUsers onadduser={addUserHandler} />
    <UserList users={userList}/>
       </Fragment>
  
  )
}

export default App;
