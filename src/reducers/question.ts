import { createSlice } from "@reduxjs/toolkit";
export interface QuestionOptionProps {
  uid: number;
  name: string;
}

interface QuestionProps {
  id: number;
  qType: string;
  query: string;
  isRequired: boolean;
  hasOptions: boolean;
  options: QuestionOptionProps[];
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
            question.options = [];
            question.options.push({
              uid: 1,
              name: "옵션 1",
            });
            break;
          default:
            break;
        }
      }
    },
    addQuestionOptions: (state, action) => {
      const { id, name } = action.payload;
      const question = state.find((item) => item.id === id);
      const length = question && question.options.length;
      length &&
        length > 0 &&
        question.options?.push({
          uid: length,
          name,
        });
    },
  },
});

export const {
  addQuestion,
  updateQuestionQuery,
  updateQuestionType,
  addQuestionOptions,
} = questionSlice.actions;
export default questionSlice.reducer;
