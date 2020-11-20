import { FETCH_QUESTIONS } from '../../constants/actions.js'
import { START, SUCCESS, FAIL } from '../../constants'

export const fetchQuestions = (resultId) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_QUESTIONS + START,
  })
  return fetch(`https://cez.ttmf.ru/api/PollResultInfo?result_id=${resultId}`, {
    crossDomain: true,
    headers: new Headers({
      'Authorization': 'Basic ' + btoa('polls-results:98437f86-7f3d-4354-abdc-4efa18d07d5f'),
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_QUESTIONS + SUCCESS,
        payload: {
          questions: data.questions,
          poll: data.poll
        }
      })
    )
    .catch(e => {
      return dispatch({
        type: FETCH_QUESTIONS + FAIL,
        error: e,
      })
    }
    )
}

// http://webservices.cez.ttmf.ru/poll/get_poll_result_full.ashx?user_id=${userId}&schedule_id=${scheduleId}