import * as React from "react";
import * as S from "./style";
import QuestionSelector from "../QuestionSelector";
import TextualQuestion from "../TextualQuestion";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import question, {
  QuestionOptionProps,
  updateQuestionQuery,
  updateQuestionType,
} from "../../reducers/question";
import SelectiveQuestion from "../SelectiveQuestion";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { MdContentCopy } from "@react-icons/all-files/md/MdContentCopy";

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

  const isPreview = location.pathname === "/preview";

  const handleOnChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(e.target.value);
  };

  React.useEffect(() => {
    dispatch(updateQuestionType({ id, qType: questionType }));
  }, [questionType]);

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
        <SelectiveQuestion id={id} qType={questionType} options={options} />
      )}
      {!isPreview && (
        <S.QuestionFooter>
          <MdDelete />
          <MdContentCopy />
          <div>toggle button</div>
        </S.QuestionFooter>
      )}
    </S.QuestionContainer>
  );
};
export default QuestionTemplate;
