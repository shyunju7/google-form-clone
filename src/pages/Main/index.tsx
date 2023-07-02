import * as React from "react";
import * as S from "./style";
import TitleContainer from "../../components/TitleContainer";
import { useDispatch, useSelector } from "react-redux";
import { updateFormDescription, updateFormTitle } from "../../reducers/form";
import QuestionTemplate from "../../components/QuestionTemplate";
import { RootState } from "../../store";
import { addQuestion, dragQuestion } from "../../reducers/question";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const Main = () => {
  const SHORT_ANSWER_TYPE = "SHORT_ANSWER_TYPE";
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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    let from = source.index;
    let to = destination?.index;

    dispatch(
      dragQuestion({
        from,
        to,
      })
    );
  };

  return (
    <S.MainContainer ref={scrollRef}>
      <DragDropContext onDragEnd={onDragEnd}>
        <TitleContainer
          formPreferences={formPreferences}
          handleOnChange={handleOnChangeFormPreferences}
          handleOnBlur={handleOnBlur}
        />
        <Droppable droppableId="droppable-id">
          {(provided) => (
            <div className="drag_container" ref={provided.innerRef}>
              {questions &&
                questions.length > 0 &&
                questions.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`draggableId-${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="drag_wrapper"
                        key={item.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <QuestionTemplate
                          id={item.id}
                          qType={item.qType}
                          query={item.query}
                          isRequired={item.isRequired}
                          hasOptions={item.hasOptions}
                          options={item.options}
                          provided={provided}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <a href="/preview" target="_blank">
          <S.PreviewButton />
        </a>
        <S.AddButton onClick={handleOnClickAddQuestion} />
      </DragDropContext>
    </S.MainContainer>
  );
};

export default Main;
