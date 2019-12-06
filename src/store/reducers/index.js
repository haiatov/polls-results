import { combineReducers } from 'redux'

import questionsReducer from './questionsReducer.js'
import pollReducer from './pollReducer.js'

const mainReducer = combineReducers({
  questions: questionsReducer,
  poll: pollReducer
})

export default mainReducer