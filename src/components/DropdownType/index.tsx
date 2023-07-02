import * as React from "react";
import { OptionComponentTypes } from "../SelectiveQuestion";

const DropdownType = ({
  options,
  handleOnChangeOptionValue,
  isPreview,
  id,
}: OptionComponentTypes) =>
  isPreview ? (
    <select>
      {options.map((item) => (
        <option key={id + item.uid} value={item.uid}>
          {item.name}
        </option>
      ))}
    </select>
  ) : (
    <ul className="question_options">
      {options.map((item, index) => (
        <li key={index} value={item.uid}>
          {index + 1}.
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

export default DropdownType;
