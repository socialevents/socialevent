import { combineReducers } from 'redux'
import testReducer from '../../features/testarea/testReducer'
import eventReducer from '../../features/event/eventReducer'
import authReducer from '../../redux/authReducer';
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    users: authReducer
})

export default rootReducer