import { combineReducers } from 'redux'
import testReducer from '../../features/testarea/testReducer'
import eventReducer from '../../features/event/eventReducer'
import { reducer as FormReducer } from 'redux-form'
import modalsReducer from '../../features/modals/modalReducer'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalsReducer
})

export default rootReducer