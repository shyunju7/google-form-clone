import * as React from "react";
import * as S from "./style";
import QuestionSelector from "../QuestionSelector";
const QuestionTemplate = () => {
  return (
    <S.QuestionContainer>
      <S.QuestionCreator>
        <input className="question_input" type="text" placeholder="질문" />
        <QuestionSelector />
      </S.QuestionCreator>
    </S.QuestionContainer>
  );
};
export default QuestionTemplate;
