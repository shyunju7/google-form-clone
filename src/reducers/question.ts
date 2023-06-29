import { createSlice } from "@reduxjs/toolkit";
interface QuestionOptionProps {
  name: string;
  value: string;
}

interface QuestionProps {
  id: number;
  qType: string;
  query: string;
  isRequired: boolean;
  hasOptions: boolean;
  options?: Array<QuestionOptionProps>;
}

const initialState: QuestionProps[] = [];

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.push(action.payload);
    },
    updateQuestionQuery: (state, action) => {
      const { id, query } = action.payload;
      const question = state.find((item) => item.id === id);

      if (question) {
        question.query = query;
      }
    },
    updateQuestionType: (state, action) => {
      const { id, qType } = action.payload;
      const question = state.find((item) => item.id === id);

      if (question) {
        switch (qType) {
          case "SHORT_ANSWER_TYPE":
          case "LONG_ANSWER_TYPE":
            question.qType = qType;
            question.hasOptions = false;
            question.options = [];
            break;

          case "MULTIPLE_CHOICE_TYPE":
          case "CHECKBOX_TYPE":
          case "DROPDOWN_TYPE":
            question.qType = qType;
            question.hasOptions = true;
            break;

          default:
            break;
        }
      }
    },
  },
});

export const { addQuestion, updateQuestionQuery, updateQuestionType } =
  questionSlice.actions;
export default questionSlice.reducer;
