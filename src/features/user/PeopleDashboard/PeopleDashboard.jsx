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
    <Segment>
    <Item.Group style={{color: 'black'}} as={Link} to={`/user/${user.id}`}>
    <Item.Image size='tiny' circular src={user.profile_pic}/>
    <h3>{user.name}</h3>
    <p>{truncateDesc(user.description, 100)}</p>
    
    <Image size='tiny'  src={user.profile_pics[0]}/>
    <Image size='tiny'  src={user.profile_pics[1]}/>
    <Image size='tiny'  src={user.profile_pics[2]}/>
    </Item.Group>
    </Segment>
    </div>
))
console.log(users)
    return (
        <div>
            <h1>People</h1>
            <p>{usersMap}</p>
        </div>
    )
}

export default PeopleDashboard