import * as React from "react";
import * as S from "./style";
import TitleContainer from "../../components/TitleContainer";
import { useDispatch } from "react-redux";
import { updateFormDescription, updateFormTitle } from "../../reducers/form";
const Main = () => {
  const dispatch = useDispatch();
  const [formPreferences, setFormPreferences] = React.useState({
    title: "제목 없는 설문지",
    description: "",
  });

  const handleOnChangeFormPreferences = (name: string, value: string) => {
    console.log(name, value);
    setFormPreferences({
      ...formPreferences,
      [name]: value,
    });
  };

  const handleOnBlur = (name: string, value: string) => {
    if (name === "title") {
      dispatch(updateFormTitle(value));
      return;
    }
    dispatch(updateFormDescription(value));
  };

  return (
    <S.MainContainer>
      <TitleContainer
        formPreferences={formPreferences}
        handleOnChange={handleOnChangeFormPreferences}
        handleOnBlur={handleOnBlur}
      />
    </S.MainContainer>
  );
};

export default Main;
