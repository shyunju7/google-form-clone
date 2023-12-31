import * as React from "react";
import * as S from "./style";
import QuestionSelector from "../QuestionSelector";
import TextualQuestion from "../TextualQuestion";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  QuestionOptionProps,
  changeRequiredProperty,
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
import { MdDragHandle } from "@react-icons/all-files/md/MdDragHandle";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { DraggableProvided } from "react-beautiful-dnd";
import ToggleButton from "../ToggleButton";

interface QuestionTemplateProps {
  id: number;
  qType: string;
  query: string;
  isRequired: boolean;
  hasOptions: boolean;
  options?: QuestionOptionProps[];
  provided?: DraggableProvided;
}

const QuestionTemplate = ({
  id,
  qType,
  query = "",
  isRequired,
  hasOptions,
  options = [],
  provided,
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

  const handleOnClickRequiredButton = () => {
    setRequiredValue((prev) => !prev);
    dispatch(changeRequiredProperty({ id }));
  };

  const handleSetToggleValue = () => {
    setRequiredValue((value: boolean) => !value);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <S.QuestionContainer
        $isPreview={isPreview}
        {...provided?.dragHandleProps}
      >
        <S.QuestionCreator>
          {isPreview ? (
            <div>
              {queryValue}
              <span className="required_indicator">{isRequired && "*"}</span>
            </div>
          ) : (
            <input
              id={`question_${id}`}
              className={`question_input question_input_main}`}
              type="text"
              placeholder="질문"
              value={queryValue}
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
          )}
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
                onClick={handleOnClickRequiredButton}
              >
                필수
                <ToggleButton
                  requiredValue={requiredValue}
                  handleSetToggleValue={handleSetToggleValue}
                />
              </div>
            </div>
          </S.QuestionFooter>
        )}
      </S.QuestionContainer>
    </StyleSheetManager>
  );
};
export default QuestionTemplate;
