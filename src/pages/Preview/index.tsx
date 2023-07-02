import * as React from "react";
import * as S from "./style";
import { useSelector } from "react-redux";
import TitleContainer from "../../components/TitleContainer";
import { RootState } from "../../store";
import QuestionTemplate from "../../components/QuestionTemplate";
const Preview = () => {
  const { title, description } = useSelector((state: RootState) => state.form);
  const questions = useSelector((state: RootState) => state.question);

  return (
    <S.PreviewContainer>
      <TitleContainer
        formPreferences={{ title: title, description: description }}
      />
      {questions &&
        questions.length > 0 &&
        questions.map((item) => (
          <QuestionTemplate
            key={item.id}
            id={item.id}
            qType={item.qType}
            query={item.query}
            isRequired={item.isRequired}
            hasOptions={item.hasOptions}
            options={item.options}
          />
        ))}
    </S.PreviewContainer>
  );
};

export default Preview;
