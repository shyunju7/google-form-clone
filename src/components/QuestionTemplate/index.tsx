import * as React from "react";
import * as S from "./style";
import QuestionSelector from "../QuestionSelector";
import TextualQuestion from "../textualQuestion";
import { useLocation } from "react-router-dom";

interface QuestionTemplateProps {
  id: number;
  qType: string;
  isRequired: boolean;
  hasOptions: boolean;
  options?: Array<string>;
}

const QuestionTemplate = ({
  id,
  qType,
  isRequired,
  hasOptions,
  options,
}: QuestionTemplateProps) => {
  const location = useLocation();

  const isPreview = location.pathname === "/preview";

  return (
    <S.QuestionContainer>
      <S.QuestionCreator>
        <input
          className={`question_input ${
            isPreview ? "question_input_preview" : "question_input_main"
          }`}
          type="text"
          placeholder="질문"
          readOnly={isPreview}
        />
        {!isPreview && <QuestionSelector />}
      </S.QuestionCreator>
      {!hasOptions ? (
        <TextualQuestion qType={qType} />
      ) : (
        <div>옵션 있는 컴포넌트</div>
      )}
      {!isPreview && <S.QuestionFooter></S.QuestionFooter>}
    </S.QuestionContainer>
  );
};
export default QuestionTemplate;
