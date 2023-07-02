import * as React from "react";
import { OptionComponentTypes } from "../SelectiveQuestion";

const CheckboxType = ({
  options,
  handleOnChangeOptionValue,
  isPreview,
  id,
}: OptionComponentTypes) => (
  <ul className="question_options">
    {options.map((item) => (
      <li key={id + item.uid}>
        <input type="checkbox" value={item.uid} name={id.toString()} />
        <input
          type="text"
          value={item.name}
          onChange={(e) => handleOnChangeOptionValue(e, item.uid)}
          placeholder={`옵션 ${item.uid}`}
          readOnly={isPreview}
          autoFocus
        />
      </li>
    ))}
  </ul>
);
export default CheckboxType;
