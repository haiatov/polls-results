import { FETCH_QUESTIONS } from '../../constants/actions'
import { START, SUCCESS, FAIL } from '../../constants'

const initialState = []

export default function questionsReducer(state = initialState, action) {
  switch(action.type){
    case FETCH_QUESTIONS + START:
      return state;
    case FETCH_QUESTIONS + SUCCESS:
      const newQuestions = action.payload.questions;
      return newQuestions;
    case FETCH_QUESTIONS + FAIL:
      alert('Ошибка, попробуйте еще раз');
      console.log(action.error);
      return state;
    default:
      return state;
  }
}