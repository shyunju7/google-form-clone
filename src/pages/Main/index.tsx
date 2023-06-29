import * as React from "react";
import * as S from "./style";
import TitleContainer from "../../components/TitleContainer";
import { useDispatch, useSelector } from "react-redux";
import { updateFormDescription, updateFormTitle } from "../../reducers/form";
import QuestionTemplate from "../../components/QuestionTemplate";
import { RootState } from "../../store";
import { addQuestion } from "../../reducers/question";
const Main = () => {
  const SHORT_ANSWER_TYPE = "SHORT_ANSWER_TYPE";
  const questionId = React.useRef<number>(0);
  const dispatch = useDispatch();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const questions = useSelector((state: RootState) => state.question);
  const { title, description } = useSelector((state: RootState) => state.form);
  const [formPreferences, setFormPreferences] = React.useState({
    title,
    description,
  });

  const handleOnChangeFormPreferences = (name: string, value: string) => {
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

  const handleOnClickAddQuestion = () => {
    const nQuestion = {
      id: questionId.current++,
      qType: SHORT_ANSWER_TYPE,
      query: "",
      isRequired: false,
      hasOptions: false,
      options: [],
    };
    dispatch(addQuestion(nQuestion));

    if (scrollRef.current) {
      window.scrollTo(0, scrollRef.current.scrollHeight);
    }
  };

  return (
    <S.MainContainer ref={scrollRef}>
      <TitleContainer
        formPreferences={formPreferences}
        handleOnChange={handleOnChangeFormPreferences}
        handleOnBlur={handleOnBlur}
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

      <a href="/preview" target="_blank">
        <S.PreviewButton />
      </a>
      <S.AddButton onClick={handleOnClickAddQuestion} />
    </S.MainContainer>
  );
};

export default Main;
