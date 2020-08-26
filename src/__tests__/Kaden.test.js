let events = [{
    attendees:[], 
    categoroy:'music',
    city:'SLC',
    date:'2020-09-04T00:00:00-06:00', 
    description: 'THE BEST JORDO PARTY EVERRR',
    hostPhotoURL: 'https://lh3.googleusercontent.com/a-/AOh14Gi5ndVgAtfH3rPIn2gPSgbjrn6Pjwm2KDcAxbxe',
    hostedBy:'Jordo Wiebo',
    id: "8Kt7f0Ub7F4eX5hsuBXo",
    title: 'Jordo party 3',
    venue: "50 N West Temple, Salt Lake City, UT 84150",
    venueLating: {}
}];

let users = [{
    name: 'kaden',
    userId: 1,
    profile_pic: 'https://colorfulmotion.com/user/1',
    email: 'kadenkleinonline@gmail.com',
    profile_pic: ['https://colorfulmotion.com/user/1', 'https://colorfulmotion.com/user/2']
}]
let userId = 1;
let eventId = 0;
let update = {name: 'New Name', email: 'Another Email'};
let addedEvent = {title:'Jordo Party 4', category:'music', city:'St. George', venue:'St. George park', venueLating:{}, description:'Best party in the world', date:'2020-10-15T00:00:00-06:00',};

test('addEvent', () => {
    let userIndex = users.findIndex(user => user.userId === userId);
    const {name, profile_pic} =  users[userIndex];
    events.push({...addedEvent, ...{attendees:[], hostedBy:name,hostPhotoURL:profile_pic}});

    expect(events.length).toBe(2);
    expect(events[events.length - 1].attendees).toEqual([]);
    expect(events[events.length - 1].hostedBy).toEqual(users[userIndex].name);
    expect(events[events.length - 1].hostPhotoURL).toEqual(users[userIndex].profile_pic);
    expect(events[events.length - 1].title).toBe(addedEvent.title);

})

test('joinEvent', () => {

    let userIndex = users.findIndex(user => user.userId === userId);
    let user = users[userIndex];
    let {name, profile_pic} = user;
    events[eventId].attendees.push({name, profile_pic, userId})

   expect(events[eventId].attendees.length).toEqual(1);
   expect(events[eventId].attendees[events[eventId].attendees.length-1]).toEqual({name, profile_pic, userId})
});

test('leaveEvent', () =>{
    
    let userIndex = users.findIndex(user => user.userId === userId);
    let user = users[userIndex];
    let {name, profile_pic} = user;
    let attendeeIndex = events[eventId].attendees.findIndex(attendee => {return {name, profile_pic, userIndex} === attendee})
    events[eventId].attendees.splice(attendeeIndex, 1);

    expect(events[eventId].attendees.length).toEqual(0);
});

test('updateEvent', () => {

    events[eventId] = {...events[eventId], ...update};
    expect(events[eventId].name).toBe(update.name);
    expect(events[eventId].email).toBe(update.email);
    
})

test('deleteEvent', () => {

    events.splice(eventId, 1);
    expect(events.length).toBe(1);
})
