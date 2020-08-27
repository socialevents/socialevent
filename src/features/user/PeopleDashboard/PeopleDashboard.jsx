import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Grid, Container, Image, Segment, Form, Item } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import { stripBasename } from 'history/PathUtils';



const PeopleDashboard = () => {
    const [users, setUsers] = useState([]);

useEffect(() => {
    getAllUsers()
    
}, [])

const getAllUsers = () => {
    axios.get('/api/users')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err));
    
}

const truncateDesc = (desc, num) => {
    if(desc.length <= num) {
        return desc
    }

    return desc.slice(0, num) + '...'
    
}

const usersMap = users.map((user, i) => (
    <div  key={user.id} user={user} >
    <div className='people'>
    <Segment>
    <Item.Group style={{color: 'black'}} as={Link} to={`/user/${user.id}`}>
    <Item.Image size='tiny' circular src={user.profile_pic}/>
    <h3 className='username'>{user.name}</h3>
    <p className='deets'>{truncateDesc(user.description, 100)}</p>
    <div className ='peeppics'>
    <Image size='tiny'  src={user.profile_pics[0]}/>
    <Image size='tiny'  src={user.profile_pics[1]}/>
    <Image size='tiny'  src={user.profile_pics[2]}/>
    </div>
    </Item.Group>
    </Segment>
    </div>
    </div>
))
console.log(users)
    return (
        <div className='peopleheader'>
            <h1>Make Some New Friends</h1>
            <p>{usersMap}</p>
        </div>
    )
}

export default PeopleDashboard