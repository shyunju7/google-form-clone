import * as React from "react";
import * as S from "./style";
import QuestionSelector from "../QuestionSelector";
import TextualQuestion from "../TextualQuestion";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  QuestionOptionProps,
  copyQuestion,
  deleteQuestion,
  updateQuestionQuery,
  updateQuestionType,
} from "../../reducers/question";
import SelectiveQuestion from "../SelectiveQuestion";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { MdContentCopy } from "@react-icons/all-files/md/MdContentCopy";
import { MdCheckBoxOutlineBlank } from "@react-icons/all-files/md/MdCheckBoxOutlineBlank";
import { MdCheckBox } from "@react-icons/all-files/md/MdCheckBox";

interface QuestionTemplateProps {
  id: number;
  qType: string;
  query: string;
  isRequired: boolean;
  hasOptions: boolean;
  options?: QuestionOptionProps[];
}

const QuestionTemplate = ({
  id,
  qType,
  query = "",
  isRequired,
  hasOptions,
  options = [],
}: QuestionTemplateProps) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [questionType, setQuestionType] = React.useState(qType);
  const [queryValue, setQueryValue] = React.useState(query);
  const [requiredValue, setRequiredValue] = React.useState(isRequired);

  const isPreview = location.pathname === "/preview";

  const handleOnChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(e.target.value);
  };

  const handleUpdateQuestionType = (nType: string) => {
    setQuestionType(nType);
    dispatch(updateQuestionType({ id, qType: nType }));
  };

  const handleOnClickDeleteButton = () => {
    dispatch(deleteQuestion({ id }));
  };

  const handleOnClickCopyButton = () => {
    dispatch(copyQuestion({ id }));
  };

  return (
    <S.QuestionContainer path={location.pathname}>
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
            handleUpdateQuestionType={handleUpdateQuestionType}
            questionType={questionType}
          />
        )}
      </S.QuestionCreator>
      {!hasOptions ? (
        <TextualQuestion qType={questionType} />
      ) : (
        <SelectiveQuestion id={id} qType={questionType} options={options} />
      )}
      {!isPreview && (
        <S.QuestionFooter>
          <div className="question_footer_wrapper">
            <MdContentCopy
              size="24"
              color="var(--hint-text-color)"
              onClick={handleOnClickCopyButton}
            />
            <MdDelete
              size="24"
              color="var(--hint-text-color)"
              onClick={handleOnClickDeleteButton}
            />
            <div
              className="question_footer_required_label"
              onClick={() => setRequiredValue((prev) => !prev)}
            >
              필수
              {requiredValue ? (
                <MdCheckBox size="24" />
              ) : (
                <MdCheckBoxOutlineBlank
                  size="24"
                  color="var(--hint-text-color)"
                />
              )}
            </div>
          </div>
        </S.QuestionFooter>
      )}
    </S.QuestionContainer>
  );
};
export default QuestionTemplate;
