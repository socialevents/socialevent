import { createReducer } from '../../app/common/util/reducerUtil'
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, GET_EVENTS, JOIN_EVENT, LEAVE_EVENT } from './eventConstants'

   const initialState = [];
      
      

  export const getEvents = (state, payload) => {
    return payload.data;
  }

  export const joinEvent = (state, payload) => {
    let event = state.filter(event => event.id === payload.event.id)[0];
    if (!event.attendees.find((attendee) => payload.data.id === attendee.id)) event.attendees.push(payload.data);
    return [
        ...state, Object.assign({}, event)
    ]
  }

  export const leaveEvent = (state, payload) => {
    let event = state.filter(event => event.id === payload.event.id)[0];
    let index = event.attendees.findIndex(attendee => attendee.id === payload.data.id);
    if (index !== -1) {
        event.attendees.splice(index, 1);
    }
    return [
        ...state, Object.assign({}, event)
    ]
  }

  export const createEvent = (state, payload) => {
      return[...state, Object.assign({}, payload.event)]
  }

  export const updateEvent = (state, payload) => {
      console.log(state);
      return [
          ...state.filter(event => event.id !== payload.event.id),
          Object.assign({}, payload.event)
      ]
  }

  export const deleteEvent = (state, payload) => {
      return [...state.filter(event => event.id !== payload.eventId)]
  }

  export default createReducer(initialState, {
      [CREATE_EVENT]: createEvent,
      [UPDATE_EVENT]: updateEvent,
      [DELETE_EVENT]: deleteEvent,
      [GET_EVENTS]: getEvents,
      [JOIN_EVENT]: joinEvent,
      [LEAVE_EVENT]: leaveEvent
      
  })