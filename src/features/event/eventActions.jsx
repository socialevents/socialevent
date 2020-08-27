import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, GET_EVENTS, JOIN_EVENT, LEAVE_EVENT, SEND_MESSAGE} from './eventConstants';

export const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        payload: {
            event
        }
    }
}

export const updateEvent = (event) => {
    return {
       type: UPDATE_EVENT,
        payload: {
            event
        }
    }
}

export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: {
            eventId
        }
    }
}

export const getEvents = (data) => {
    return {
        type: GET_EVENTS,
        payload: {
            data
        }
    }
}

export const joinEvent = (data, event) => {
    return {
        type: JOIN_EVENT,
        payload: {
            event,
            data
        }
    }
};

export const leaveEvent = (data, event) => {
    return {
        type: LEAVE_EVENT,
        payload: {
            event,
            data
        }
    }
}

export const sendMessage = (data, event) => {
    console.log("SENT MESSAGE")
    return {
        type: SEND_MESSAGE,
        payload: {
            event,
            data
        }
    }
}