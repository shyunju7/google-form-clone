import * as React from "react";
import * as S from "./style";
import {
  QuestionOptionProps,
  addQuestionOptions,
  updateQuestionOption,
} from "../../reducers/question";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

interface SelectiveQuestionProps {
  id: number;
  qType: string;
  options: QuestionOptionProps[];
}

const SelectiveQuestion = ({ id, qType, options }: SelectiveQuestionProps) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [nOption, setNOtion] = React.useState(`옵션 ${options.length + 1}`);
  const isPreview = location.pathname === "/preview";

  const handleOnClickAddOption = () => {
    dispatch(
      addQuestionOptions({
        id,
        name: nOption,
      })
    );
    setNOtion(""); // clear
  };
  const handleMakeOptions = (): React.ReactNode => {
    switch (qType) {
      case "MULTIPLE_CHOICE_TYPE":
        return (
          <ul className="question_options">
            {options.map((item, index) => (
              <li key={index}>
                <input type="radio" value={item.uid} name={id.toString()} />
                <input
                  type="text"
                  value={item.name === "" ? nOption : item.name}
                  onChange={({
                    target: { value },
                  }: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      updateQuestionOption({
                        id,
                        uid: item.uid,
                        name: value,
                      })
                    )
                  }
                  readOnly={isPreview}
                />
              </li>
            ))}
            {!isPreview && (
              <div>
                <input type="radio" />
                <input
                  className="add_option_input"
                  type="text"
                  placeholder="옵션 추가"
                  onFocus={handleOnClickAddOption}
                  onChange={({
                    target: { value },
                  }: React.ChangeEvent<HTMLInputElement>) => setNOtion(value)}
                />
              </div>
            )}
          </ul>
        );
      case "CHECKBOX_TYPE":
        return (
          <ul className="question_options">
            {options.map((item, index) => (
              <li key={index}>
                <input type="checkbox" value={item.uid} />
                <input
                  type="text"
                  value={item.name === "" ? nOption : item.name}
                  onChange={({
                    target: { value },
                  }: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(
                      updateQuestionOption({
                        id,
                        uid: item.uid,
                        name: value,
                      })
                    )
                  }
                  readOnly={isPreview}
                />
              </li>
            ))}
            {!isPreview && (
              <div>
                <input
                  className="add_option_input"
                  type="text"
                  value={nOption}
                  placeholder="옵션 추가"
                  onChange={({
                    target: { value },
                  }: React.ChangeEvent<HTMLInputElement>) => setNOtion(value)}
                  onFocus={handleOnClickAddOption}
                />
              </div>
            )}
          </ul>
        );
      case "DROPDOWN_TYPE":
        return isPreview ? (
          <select>
            {options.map((item, index) => (
              <option key={index} value={item.uid}>
                {item.name}
              </option>
            ))}
          </select>
        ) : (
          <ul className="question_options">
            {options.map((item, index) => (
              <li key={index} value={item.uid}>
                {item.name}
              </li>
            ))}
            {!isPreview && (
              <div>
                <input
                  className="add_option_input"
                  type="text"
                  value={nOption}
                  placeholder="옵션 추가"
                  onFocus={handleOnClickAddOption}
                  onChange={({
                    target: { value },
                  }: React.ChangeEvent<HTMLInputElement>) => setNOtion(value)}
                />
              </div>
            )}
          </ul>
        );
      default:
        return;
    }
  };
  return (
    <S.SelectiveQuestionContainer>
      {handleMakeOptions()}
    </S.SelectiveQuestionContainer>
  );
};

export default SelectiveQuestion;
