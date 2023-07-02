import * as React from "react";
import * as S from "./style";
import {
  QuestionOptionProps,
  addQuestionOptions,
  updateQuestionOption,
} from "../../reducers/question";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import MultipleChoiceType from "../MultipleChoiceType";
import CheckboxType from "../CheckboxType";
import DropdownType from "../DropdownType";

interface SelectiveQuestionProps {
  id: number;
  qType: string;
  options: QuestionOptionProps[];
}

export type OptionComponentTypes = {
  options: QuestionOptionProps[];
  handleOnChangeOptionValue: (
    e: React.ChangeEvent<HTMLInputElement>,
    uid: number
  ) => void;
  isPreview: boolean;
  id: number;
};

const SelectiveQuestion = ({ id, qType, options }: SelectiveQuestionProps) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isPreview = location.pathname === "/preview";

  const handleOnClickAddOption = () => {
    dispatch(
      addQuestionOptions({
        id,
        name: `옵션 ${options.length + 1}`,
      })
    );
  };

  const handleOnChangeOptionValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    uid: number
  ) => {
    const { value } = e.target;
    dispatch(
      updateQuestionOption({
        id,
        uid: uid,
        name: value,
      })
    );
  };

  const handleMakeOptions = (): React.ReactNode => {
    let OptionComponent: React.FunctionComponent<OptionComponentTypes> | null =
      null;

    switch (qType) {
      case "MULTIPLE_CHOICE_TYPE":
        OptionComponent = MultipleChoiceType;
        break;

      case "CHECKBOX_TYPE":
        OptionComponent = CheckboxType;
        break;

      case "DROPDOWN_TYPE":
        OptionComponent = DropdownType;
        break;
      default:
        return null;
    }

    if (OptionComponent) {
      return (
        <OptionComponent
          id={id}
          isPreview={isPreview}
          options={options}
          handleOnChangeOptionValue={handleOnChangeOptionValue}
        />
      );
    }
    return null;
  };

  return (
    <S.SelectiveQuestionContainer>
      {handleMakeOptions()}
      {!isPreview && (
        <div>
          {qType === "MULTIPLE_CHOICE_TYPE" ? (
            <input type="radio" />
          ) : qType === "CHECKBOX_TYPE" ? (
            <input type="checkbox" />
          ) : (
            <label>{options.length + 1}. </label>
          )}
          <input
            className="add_option_input"
            type="text"
            placeholder="옵션 추가"
            onFocus={handleOnClickAddOption}
            readOnly
          />
        </div>
      )}
    </S.SelectiveQuestionContainer>
  );
};

export default SelectiveQuestion;
