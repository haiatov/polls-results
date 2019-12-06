export const questionsAllCount = state => state.questions.length;

export const questionsRightCount = state => {
  let count = 0;
  questions: for(let i = 0; i < questionsAllCount(state); i++){
    for(let j = 0; j < state.questions[i].answers.length; j++){
      const answer = state.questions[i].answers[j];
      if(answer.user_answer.toLowerCase() !== answer.right_answer.toLowerCase()) {
        continue questions;
      }
    }
    count++;
  }
  return count;
}
