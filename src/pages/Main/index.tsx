import * as React from "react";
import * as S from "./style";
import TitleContainer from "../../components/TitleContainer";
import { useDispatch } from "react-redux";
import { updateFormDescription, updateFormTitle } from "../../reducers/form";
import QuestionTemplate from "../../components/QuestionTemplate";
import TextualQuestion from "../../components/textualQuestion";
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
      <QuestionTemplate
        id={1}
        qType="SHORT_ANSWER_TYPE"
        isRequired={true}
        hasOptions={false}
      />
      <QuestionTemplate
        id={2}
        qType="LONG_ANSWER_TYPE"
        isRequired={true}
        hasOptions={false}
      />
    </S.MainContainer>
  );
};

export default Main;
