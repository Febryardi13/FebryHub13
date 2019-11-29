import {combineReducers} from 'redux'
import Counter from './counterReducer'

export default combineReducers({
    vault:Counter
})