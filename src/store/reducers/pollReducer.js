import { FETCH_QUESTIONS } from '../../constants/actions'
import { START, SUCCESS, FAIL } from '../../constants'

const initialState = []

export default function questionsReducer(state = initialState, action) {
  switch(action.type){
    case FETCH_QUESTIONS + SUCCESS:
      const poll = action.payload.poll;
      return poll;
    default:
      return state;
  }
}