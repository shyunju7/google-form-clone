import * as React from "react";
import * as S from "./style";
import { questions } from "../../data/questionList";
import { questionTypes } from "../../data/questionTypes";

interface QuestionSelectorProps {
  setQuestionType: (value: string) => void;
  questionType: string;
}

const QuestionSelector = ({
  setQuestionType,
  questionType,
}: QuestionSelectorProps) => {
  const [currentValue, setCurrentValue] = React.useState(
    questionTypes[questionType]
  );
  const [showOptions, setShowOptions] = React.useState(false);

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const value = target.getAttribute("value");
    const type = target.getAttribute("type");
    setCurrentValue(value || "");
    setQuestionType(type || "");
  };

  return (
    <S.SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <label>{currentValue}</label>
      <S.SelectOptions show={showOptions ? "true" : "false"}>
        {questions.map((data) => (
          <S.Option
            key={data.qType}
            type={data.qType}
            value={data.name}
            onClick={handleOnChangeSelectValue}
            current={currentValue === data.name ? "current" : ""}
          >
            {data.name}
          </S.Option>
        ))}
      </S.SelectOptions>
    </S.SelectBox>
  );
};

export default QuestionSelector;
