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

  const handleAddOption = () => {
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
        uid,
        name: value,
      })
    );
  };

  const handleMakeOptions = (): JSX.Element | null => {
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

  const handleRenderAddOptionInput = (): JSX.Element | null => {
    if (isPreview) return null;

    let OptionInput: JSX.Element;

    if (qType === "MULTIPLE_CHOICE_TYPE") {
      OptionInput = <input type="radio" />;
    } else if (qType === "CHECKBOX_TYPE") {
      OptionInput = <input type="checkbox" />;
    } else {
      OptionInput = <label>{options.length + 1}. </label>;
    }

    return (
      <div>
        {OptionInput}
        <input
          className="add_option_input"
          type="text"
          placeholder="옵션 추가"
          onFocus={handleAddOption}
          readOnly
        />
      </div>
    );
  };

  return (
    <S.SelectiveQuestionContainer>
      {handleMakeOptions()}
      {handleRenderAddOptionInput()}
    </S.SelectiveQuestionContainer>
  );
};

export default SelectiveQuestion;
