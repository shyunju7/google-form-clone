import * as React from "react";
import * as S from "./style";
import QuestionSelector from "../QuestionSelector";
import TextualQuestion from "../textualQuestion";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuestionQuery } from "../../reducers/question";

interface QuestionTemplateProps {
  id: number;
  qType: string;
  query: string;
  isRequired: boolean;
  hasOptions: boolean;
  options?: Array<string>;
}

const QuestionTemplate = ({
  id,
  qType,
  query = "",
  isRequired,
  hasOptions,
  options,
}: QuestionTemplateProps) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [questionType, setQuestionType] = React.useState(qType);
  const [queryValue, setQueryValue] = React.useState(query);

  const isPreview = location.pathname === "/preview";

  const handleOnChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(e.target.value);
  };

  return (
    <S.QuestionContainer>
      <S.QuestionCreator>
        <input
          id={`question_${id}`}
          className={`question_input  ${
            isPreview ? "question_input_preview" : "question_input_main"
          }`}
          type="text"
          placeholder="질문"
          value={
            !isPreview ? queryValue : isRequired ? queryValue + "*" : queryValue
          }
          readOnly={isPreview}
          onChange={handleOnChangeValue}
          onBlur={() => {
            dispatch(
              updateQuestionQuery({
                id,
                query: queryValue,
              })
            );
          }}
        />
        {!isPreview && (
          <QuestionSelector
            setQuestionType={setQuestionType}
            questionType={questionType}
          />
        )}
      </S.QuestionCreator>
      {!hasOptions ? (
        <TextualQuestion qType={questionType} />
      ) : (
        <div>옵션 있는 컴포넌트</div>
      )}
      {!isPreview && <S.QuestionFooter></S.QuestionFooter>}
    </S.QuestionContainer>
  );
};
export default QuestionTemplate;
