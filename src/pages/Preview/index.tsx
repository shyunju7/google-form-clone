import * as React from "react";
import * as S from "./style";
import { useSelector } from "react-redux";
import TitleContainer from "../../components/TitleContainer";
import { RootState } from "../../store";
import QuestionTemplate from "../../components/QuestionTemplate";
const Preview = () => {
  const { title, description } = useSelector((state: RootState) => state.form);

  return (
    <S.PreviewContainer>
      <TitleContainer
        formPreferences={{ title: title, description: description }}
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
    </S.PreviewContainer>
  );
};

export default Preview;
