import { FETCH_QUESTIONS } from '../../constants/actions'
import { START, SUCCESS, FAIL } from '../../constants'

const initialState = {
  percent_response: 100,
  poll_name: '',
  user_fio: '',
  passage_date: ''
}

export default function pollReducer(state = initialState, action) {
  switch(action.type){
    case FETCH_QUESTIONS + SUCCESS:
      const poll = action.payload.poll;
      if(poll) {
        return poll
      } else {
        return state;
      }
    default:
      return state;
  }
}