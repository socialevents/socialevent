import React, {useEffect, useState} from 'react';
import axios from 'axios'



const PeopleDashboard = () => {
    const [users, setUsers] = useState([]);

useEffect(() => {
    axios.get('/api/users')
    .then(res => {
        setUsers(res.data);
    })
    
}, [])

const usersMap = users.map((user, i) => (
    <div key={i} user={user}>
    <img src={user.img}/>
    </div>
))
    return (
        <div>
            <h1>People Dashboard</h1>
            {/* <p>{usersMap}</p> */}
        </div>
    )
}

export default PeopleDashboard