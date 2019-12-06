import { FETCH_QUESTIONS } from '../../constants/actions.js'
import { START, SUCCESS, FAIL } from '../../constants'

export const fetchQuestions = (userId, scheduleId) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_QUESTIONS + START,
  })
  return fetch(`http://webservices.cez.ttmf.ru/poll/get_poll_result_full.ashx?user_id=${userId}&schedule_id=${scheduleId}`, { 
    })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_QUESTIONS + SUCCESS,
        payload: {
          questions: data.questions,
          poll: data.poll
        }
      })
    })
    .catch(e =>
      dispatch({
        type: FETCH_QUESTIONS + FAIL,
        error: e,
      })
    )
}

//