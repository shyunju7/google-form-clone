import { useRef, useState } from "react";
import * as S from "./style";
import TitleContainer from "../../components/TitleContainer";
import { useDispatch, useSelector } from "react-redux";
import { updateFormDescription, updateFormTitle } from "../../reducers/form";
import QuestionTemplate from "../../components/QuestionTemplate";
import { RootState } from "../../store";
import { addQuestion, dragQuestion } from "../../reducers/question";
import { useNavigate } from "react-router-dom";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useLocation } from "react-router-dom";

const Main = () => {
  const SHORT_ANSWER_TYPE = "SHORT_ANSWER_TYPE";
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const questions = useSelector((state: RootState) => state.question);
  const { title, description } = useSelector((state: RootState) => state.form);
  const [formPreferences, setFormPreferences] = useState<{
    title: string;
    description: string;
  }>({
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
      <div className="main_header">
        <div className="main_menu_top" />
        <div className="main_menu_bottom">
          <ul>
            <S.MenuItem
              $isCurrentTab={location.pathname === "/"}
              onClick={() => navigate("/")}
            >
              질문
            </S.MenuItem>
            <S.MenuItem
              $isCurrentTab={location.pathname === "/result"}
              onClick={() => navigate("/result")}
            >
              응답
            </S.MenuItem>
            <S.MenuItem $isCurrentTab={location.pathname === "/preview"}>
              <a href="/preview" target="_blank">
                미리보기
              </a>
            </S.MenuItem>
          </ul>
        </div>
      </div>
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

        <S.AddButton onClick={handleOnClickAddQuestion} />
      </DragDropContext>
    </S.MainContainer>
  );
};

export default Main;
