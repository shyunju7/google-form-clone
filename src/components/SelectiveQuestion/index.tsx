import * as React from "react";
import {
  QuestionOptionProps,
  addQuestionOptions,
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
          <ul>
            {options.map((item, index) => (
              <li key={index}>
                <input type="radio" value={item.uid} />
                {item.name}
              </li>
            ))}
            <div>
              <input
                type="text"
                value={nOption}
                onChange={({
                  target: { value },
                }: React.ChangeEvent<HTMLInputElement>) => setNOtion(value)}
              />
              <button onClick={handleOnClickAddOption}>추가</button>
            </div>
          </ul>
        );
      case "CHECKBOX_TYPE":
        return (
          <ul>
            {options.map((item, index) => (
              <li key={index}>
                <input type="checkbox" value={item.uid} />
                {item.name}
              </li>
            ))}
            <div>
              <input
                type="text"
                value={nOption}
                onChange={({
                  target: { value },
                }: React.ChangeEvent<HTMLInputElement>) => setNOtion(value)}
              />
              <button onClick={handleOnClickAddOption}>추가</button>
            </div>
          </ul>
        );
      case "DROPDOWN_TYPE":
        return (
          <ul>
            {options.map((item, index) => (
              <li key={index} value={item.uid}>
                {item.name}
              </li>
            ))}
            <div>
              <input
                type="text"
                value={nOption}
                onChange={({
                  target: { value },
                }: React.ChangeEvent<HTMLInputElement>) => setNOtion(value)}
              />
              <button onClick={handleOnClickAddOption}>추가</button>
            </div>
          </ul>
        );
      default:
        return;
    }
  };
  return <div>{handleMakeOptions()}</div>;
};

export default SelectiveQuestion;
