import * as React from "react";
import * as S from "./style";

interface ToggleButtonProps {
  requiredValue: boolean;
  handleSetToggleValue: () => void;
}

const ToggleButton = ({
  requiredValue,
  handleSetToggleValue,
}: ToggleButtonProps) => {
  const [isOn, setOn] = React.useState(requiredValue);

  const handleSetOn = () => {
    setOn((prev) => !prev);
    handleSetToggleValue();
  };

  return (
    <S.ToggleContainer onClick={handleSetOn}>
      <div className={`toggle ${isOn && "checked"}`}></div>
      <div className={`toggle_indicator ${isOn && "checked_indicator"}`}></div>
    </S.ToggleContainer>
  );
};

export default ToggleButton;
